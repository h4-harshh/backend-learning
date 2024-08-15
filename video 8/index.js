const express=require('express');
const app=express();
const path=require('path');
const fs=require('fs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,'public')));


//creating and showing on home page
app.get('/',(req,res)=>{
    fs.readdir(`./files`,function(err,data){
        // console.log(files);
        res.render('index',{files:data});
    })
})
app.post('/create',(req,res)=>{
    // console.log(req.body);
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`,req.body.details,(err)=>{
        res.redirect('/');
    })
})

//showing the inner content of the file
app.get('/show/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,filedata)=>{
        // console.log(filedata);
        res.render('show',{filename:req.params.filename,filedata:filedata});
    })
})

//editing the title of the file
app.get('/edit/:filename',(req,res)=>{
    res.render('edit',{filename:req.params.filename})
})
app.post('/edit',(req,res)=>{
    // console.log(req.body);
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}`,(err)=>{
        res.redirect('/');
    })
})



const PORT='3000';
app.listen((PORT),()=>{
    console.log(`server is running on port no. ${PORT}`)
})
