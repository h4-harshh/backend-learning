// 1.------------setting up cookie and read cookie
// const express=require('express');
// const app=express();

// const cookieParser=require('cookie-parser');

// app.use(cookieParser());

// app.get('/',(req,res)=>{
//     res.cookie("name","cookie set successfully");
//     res.send("done");
// })
// app.get('/read',(req,res)=>{
//     console.log(req.cookies);
//     res.send("read page");
// })


// const PORT=3000;
// app.listen(PORT,()=>{
//     console.log(`server is running on port ${PORT}`);
// })








// 2.------------------bcrypt
// const express=require('express');
// const app=express();


// //--------------------encryptiion
// const bcrypt=require('bcrypt');

// //encrypting
// app.get('/read',(req,res)=>{
//     // bcrypt.genSalt(10,(err,salt)=>{
//     //     bcrypt.hash("mypassword",salt,(err,hash)=>{
//     //         console.log(hash);
//     //     })
//     // })
//     res.send('working');
// })

// //comparing password and hashed(password)
// app.get('/',(req,res)=>{
//     bcrypt.compare("mypassword", '$2b$10$cJqXyRwz0q8RoUf/pu13r.Zn9E2ItJU6SXBaWvxs9nIG5E5R7G4dm', function(err, result) {
//         console.log(result);
//     });
// })

// const PORT=3000;
// app.listen(PORT,()=>{
//     console.log(`server is running on port ${PORT}`);
// })


//jwt

const express=require('express');
const app=express();
// const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser=require('cookie-parser');

app.use(cookieParser());

app.get('/',(req,res)=>{
    let token=jwt.sign({email:"harsh@gmail.com"},"secret");
    res.cookie('token',token);
    res.send("done");
})


app.get('/read',(req,res)=>{
    let data=jwt.verify(req.cookies.token,"secret");
    console.log(data);
    res.send(data);
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})