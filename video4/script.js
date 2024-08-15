const express=require('express');
const app=express();


//middleware usage
//first way
app.use((req,res,next)=>{
    console.log('middleware chla');
    next();
})

app.use((req,res,next)=>{
    console.log('middleware fir se chla');
    next();
})


// app.get(request,requestHandler);

app.get("/",(req,res)=>{
    res.send("this is home(main) page");
})


app.get("/about",(req,res)=>{
    res.send("this is about page");
})

//ERROR HANDLING
app.get('/profile',(req,res,next)=>{
    return next(new Error('not inplemented'));
})

app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send('something broke!');
})

app.listen(3000);