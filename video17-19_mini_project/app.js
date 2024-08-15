const express=require('express');
const app=express();
const userModel=require('./models/user');
const postModel=require('./models/post');
const path=require('path');
const cookieParser=require('cookie-parser');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


app.set('view engine','ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/register',async (req,res)=>{
    let {email,password,username,age,name}=req.body;
    
    let user=await userModel.findOne({email:email});
    if(user) res.status(500).send('user already exists');

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt,async (err,hash)=>{
            let user=await userModel.create({
                name:name,
                username:username,
                email:email,
                password:hash,
                age:age
            })

            let token=jwt.sign({email:email,userid:user._id},'shhhhh');
            res.cookie('token',token);

            res.send("registerd");
        })
    })    
})


//login
app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login',async (req,res)=>{
    let user=await userModel.findOne({email:req.body.email});
    if(!user) res.send('username or password is incorrect');

    bcrypt.compare(req.body.password,user.password,(err,result)=>{
        if(result){
            let token=jwt.sign({email:user.email,userid:user._id},'shhhhh');
            res.cookie('token',token);
            res.send('logged in successfully');
        }
        else{
            res.send('username or password is incorrect');
        }
    })
})

//logout
app.get('/logout',(req,res)=>{
    res.cookie('token','');
    res.redirect('/login');
})


//middleware for user logged in
app.get('/profile',isLoggedIn,(req,res)=>{
    console.log(req.user);
    res.send('profile');
})

function isLoggedIn(req,res,next){
    if(req.cookies.token=="") res.send('you must be logged in');

    else{
        let data=jwt.verify(req.cookies.token,'shhhhh');
        req.user=data;
        next();
    }
}



const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});