const express=require('express');
const app=express();
const path=require('path');

const userModel=require('./models/user');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname+'public')));



app.get('/',(req,res)=>{
    res.render('index');
})

//read
app.get('/read',async (req,res)=>{
    let allUsers=await userModel.find();
    // console.log(allUsers.name);
    res.render('read',{users:allUsers});
})

//update
app.get('/edit/:userId',async (req,res)=>{
    let user=await userModel.findOne({_id:req.params.userId});
    res.render('edit',{user:user});
})

app.post('/update/:userId',async (req,res)=>{
    let {image,name,email}=req.body;    

    let updatedUser=await userModel.findOneAndUpdate({_id: req.params.userId},{image,name,email},{new:true});
    res.redirect('/read');
})





//create
app.post('/create',async (req,res)=>{
    let user=req.body;    

    let createdUser=await userModel.create({
        name:user.name,
        email:user.email,
        image:user.image
    })
    res.redirect('/read');
})



//delete
app.get('/delete/:id',async (req,res)=>{
    let user=await userModel.findOneAndDelete({_id:req.params.id});
    res.redirect('/read');
})

app.listen(3000);