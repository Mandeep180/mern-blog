const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const Post = require('./models/Post');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
// const multer = require('multer');
// const uploadMiddleware = multer({dest:'uploads/'});
// const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
//jwt salt
const secret = 'hjdhdsjhdsiwdansmx25327261b1vaasmndb';
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
 
mongoose.connect('mongodb+srv://blog:RMcps9I15ZM2juPv@cluster0.cvserch.mongodb.net/?retryWrites=true&w=majority');
//register endpoint
app.post("/register",async (req,res)=>{
    const{username,password} = req.body;
   try{
    const userDoc = await User.create({
        username,
        password:bcrypt.hashSync(password,salt),
    
    });
    res.json(userDoc);
   }catch(e){
    res.status(400).json(e);
   }
    
});
//login endpoint
app.post("/login",async (req,res)=>{
    const{username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);

    if(passOk){
        //logged in
        jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) =>{
          if(err) throw err;
          res.cookie('token',token).json({
            id:userDoc._id,
            username,
          });
        });
    }else{
        res.status(400).json('wrong credentials ');
    }
});

//end point for profile ones user logs in, remove login and register button
app.get('/profile',(req,res)=>{
    const{token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info)=>{
    if(err) throw err;
    res.json(info);
    });
    
});



// //end point for post
// app.post('/post', uploadMiddleware.single('file'), async (req,res)=>{
//     const {originalname,path} = req.file;
//     const parts = originalname.split('.');
//     const ext = parts[parts.length - 1]; 
//     const newPath = path+'.'+ext
//     fs.renameSync(path, newPath );
    
//     const {title, summary, content}= req.body;

//     const postDoc = await Post.create({
//      title,
//      summary,
//      content,
//      cover:newPath,
//     });


//   res.json({postDoc});
// });



app.post('/logout',(req,res)=>{
    res.cookie('token','').json('ok');
})
app.listen(4000);
//RMcps9I15ZM2juPv
//mongodb+srv://blog:RMcps9I15ZM2juPv@cluster0.cvserch.mongodb.net/?retryWrites=true&w=majority