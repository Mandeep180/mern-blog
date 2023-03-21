const express = require('express');
const cors = express('cors');
const app = express();


app.use(cors());

app.post("/register",(res,req)=>{
    res.json("test ok");
});
app.listen(4000);