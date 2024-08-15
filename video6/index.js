// 1....setting up parcers for form

// const express=require('express');
// const app=express();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));



// app.get('/',(req,res)=>{
//     res.send('chal rha hai');
// })

// app.listen(3000,()=>{
//     console.log('it running');
// })



// 2....setting up ejs for ejs pages


// const express=require('express');
// const app=express();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.set('view engine','ejs');

// app.get('/',(req,res)=>{
//     res.render('index');
// })

// app.listen(3000,()=>{
//     console.log('it running');
// })






// 3....setting up public static files


// const express=require('express');
// const app=express();
// const path=require('path');

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'public')));
// app.set('view engine','ejs');


// app.get('/',(req,res)=>{
//     res.render('index');
// })

// app.listen(3000,()=>{
//     console.log('it running');
// })









// 3....dynamic routing


// const express=require('express');
// const app=express();
// const path=require('path');

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'public')));
// app.set('view engine','ejs');


// app.get('/',(req,res)=>{
//     res.render('index');
// })


// //dynamic
// app.get('/profile/:username',(req,res)=>{
//     res.send(req.params.username);
// })

// //multiple dynamic
// app.get('/about/:aboutname/:number',(req,res)=>{
//     // const aboutname=req.params.aboutname;
//     // const number=req.params.number;
//     // res.send(`welcome ${aboutname} with number ${number}`);
//     res.send(req.params);
// });

// app.listen(3000,()=>{
//     console.log('it running');
// })





///revision
const express=require('express');
const app=express();
const path=require('path');

// 1.parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//2 ejs
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send("harsh");
})


//3 static files

app.use(express.static(path.join(__dirname,'public')));


app.get('/profile/:username',(req,res)=>{
    res.send(req.params.username);
})

app.listen(3000,()=>{
    console.log('it running bro');
})
