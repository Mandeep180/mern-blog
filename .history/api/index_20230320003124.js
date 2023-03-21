const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
//jwt salt
const secret = 'hjdhdsjhdsiwdansmx25327261b1vaasmndb';
app.use(cors());
app.use(express.json());
 
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
          res.json(token);
        });
    }else{
        res.status(400).json('wrong credentials ');
    }
});
app.listen(4000);
//RMcps9I15ZM2juPv
//mongodb+srv://blog:RMcps9I15ZM2juPv@cluster0.cvserch.mongodb.net/?retryWrites=true&w=majority