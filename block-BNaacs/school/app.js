var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();

app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))

app.get('/',(req,res)=>{
    var user = ["sachin","narendra","ravinder"];
    res.render('index',{user:user});
})
app.use((rej,res,next)=>{
    res.send("page not found")
})

app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});