const exp = require("express");
const app = exp()

function test(req , res , next){
    console.log("Hello test");
    next();
}

app.use(test);

//http:localhost:8080/
app.get("/",function (req,res){
    res.send("Home Page");

    //res.end();
});
//http:localhost:8080/about_us
app.get("/about_us",function (req , res){
    res.send("About us page");
});
//http:localhost:8080/products
app.get("/products",function (req,res){
    res.send("Products Page");
});
//http:localhost:8080/login
app.get("/login",function (req,res){
    res.send("GET : Login Page");
});
//or
app.use("/home",function(req,res){
    res.send("Home 2");
});


//http:localhost:8080/login
app.post("/login",function (req,res){
    res.send("POST : Login Page");
});

//If nothing else is a page
app.use(function(req,res){
    res.send("Page not found");
});


//http:localhost:8080
var port = process.env.PORT || 8080
app.listen(port);
