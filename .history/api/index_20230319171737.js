const express = require('express');
const app = express();

app.get("/",(res,req)=>{
    res.json("test ok");
})
app.listen(4000);