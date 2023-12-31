const express = require("express");
const app  = express();

app.get("/",(req,res)=>{
    res.send("welcome to my get request");
})
app.listen(5000,()=>{
    console.log("server is running on port 5000");
})