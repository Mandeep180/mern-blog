const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

app.get("/register",(res,req)=>{
    const{username,password} = req.body; 
    res.json({requestData:{username,password}});
});
app.listen(4000);