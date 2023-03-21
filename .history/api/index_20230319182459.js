const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.json());

app.get("/register",(res,req)=>{
    res.json("test ok")
});
app.listen(4000);