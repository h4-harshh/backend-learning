const express=require('express');
const app=express();

const userModel=require('./models/user');

const cookieParser=require('cookie-parser');
const path=require('path');
const user = require('./models/user');
const bcrypt=require('bcrypt');

const jwt=require('jsonwebtoken');


app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());



app.get('/',(req,res)=>{
    res.render('index');
})



//1.create user || signUp
app.post('/create',async (req,res)=>{
    let {username,email,password,age}=req.body;

    bcrypt.genSalt(10,(err,salt)=>{
        
        bcrypt.hash(password,salt,async (err,hash)=>{
            const user=await userModel.create({
                username:username,
                password:hash,
                age:age,
                email:email
            })

            let token=jwt.sign({email:email},"shhhhhhhhhhhh");
            res.cookie("token",token);
            res.send(user);
        })
    })        
})



//2.Login
app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login',async (req,res)=>{

    let user= await userModel.findOne({email:req.body.email});
    if(!user) res.send('wrong email or password');
    
    bcrypt.compare(req.body.password,user.password,(err,result)=>{
        if(result) {
            let token=jwt.sign({email:user.email},"shhhhhhhhhhhh");
            res.cookie("token",token);
            res.send('logged in');
        }
        else{
            res.send('wrong email or password');
        }
    })
})


//3.Logout
app.get('/logout',(req,res)=>{
    res.cookie("token","");
    res.send("/");
})


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running of port ${PORT}`);
})