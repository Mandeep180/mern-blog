const express = require('express');
const app = express();

app.post("/register",(res,req)=>{
    res.json("test ok");
});
app.listen(4000);