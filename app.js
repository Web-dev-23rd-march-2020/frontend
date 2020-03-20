var express = require('express');
var app = express();


app.get("/",function(req,res){
	res.send("<h1>hello</h1>");
});
app.get("/home",function(req,res){
	res.render("home.ejs");
})

app.listen(3000,function(req,res){
	console.log("server has started")
})