const express=require('express');
const userModel=require('./models/user');
const postModel=require('./models/post');

const app=express();

app.get('/',(req,res)=>{
    res.send('hey');
})


app.get('/create',async (req,res)=>{
    let user=await userModel.create({
        username:'harsh',
        age:25,
        email:'harsh@gmail.com'
    })
    res.send(user);
})


app.get('/post/create',async (req,res)=>{
    
    let post=await postModel.create({
        postdata:'hello kaise ho saare',
        user:"66bd1576885f7ef600254659"
    })

    let user=await userModel.findOne({_id:"66bd1576885f7ef600254659"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
})


const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is runnig on port ${PORT}`);
})