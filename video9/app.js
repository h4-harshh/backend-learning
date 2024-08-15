const express=require('express');
const app=express();

const userModel=require('./usermodel');

app.get('/',(req,res)=>{
    res.send('chal rha hai');
})

//creating a model
app.get('/create',async (req,res)=>{
    let userCreated=await userModel.create({
        name:'harsh',
        email:'harsh@gamil.com',
        username:'h4_harsh'
    })

    res.send(userCreated);
})
//updating the value of a user 
app.get('/update',async (req,res)=>{
    let updatedUser=await userModel.findOneAndUpdate({username:"h4_harsh"},{name:'nikhil singh'},{new:true});
    
    res.send(updatedUser);
})

//read
app.get("/read",async (req,res)=>{
    let users=await userModel.find();
    res.send(users);
})
// app.get("/read",async (req,res)=>{
//     let users=await userModel.findOne({username:'h4_harsh'});
//     res.send(users);
// })


//delete
app.get('/delete',async(req,res)=>{
    let users=await userModel.findOneAndDelete({username:"h4_harsh"});
    res.send(users);
})


const PORT=3001;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})