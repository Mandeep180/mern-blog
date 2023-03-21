const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));


app.post("/register",(res,req)=>{
    
    res.send("done");
});
app.listen(4000);