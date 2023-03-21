const express = require('express');
const app = express();

app.post("/register",(res,req)=>{
    res.send("test ok");
});
app.listen(4000);