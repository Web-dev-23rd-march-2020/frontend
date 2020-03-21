var express = require('express');
var app = express();
app.use(express.static('public'));

app.get("/",function(req,res){
	res.send("<h1>hello</h1>");
});
app.get("/home",function(req,res){
	res.render("home.ejs");
})
app.get("/login",function(req,res){
	res.render("login.ejs");
})
app.get("/signup",function(req,res){
	res.render("signup.ejs");
})


app.listen(3000,function(req,res){
	console.log("server has started")
})