const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());
 
mongoose.connect('mongodb+srv://blog:RMcps9I15ZM2juPv@cluster0.cvserch.mongodb.net/?retryWrites=true&w=majority');
app.post("/register",(req,res)=>{
    const{username,password} = req.body;
    res.json({requestData:{username,password}});
});
app.listen(4000);
//RMcps9I15ZM2juPv
//mongodb+srv://blog:RMcps9I15ZM2juPv@cluster0.cvserch.mongodb.net/?retryWrites=true&w=majority