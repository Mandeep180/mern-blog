const express = require('express');
const app = express();
const cors = express('cors');

app.use(cors());

app.post("/register",(res,req)=>{
    res.json("test ok");
});
app.listen(4000);