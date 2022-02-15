const express = require("express");
const app = express();
const path = require("path");
const data = require("./data")
//For Post Request
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, 'public')))


app.set("view engine", "ejs");

app.get("/" , (req,res)=>{
    res.render("index");
})

app.get("/about" , (req,res)=>{
    res.render("about");
})

app.get("/sell" , (req,res)=>{
    res.render("sell" , { data });
})

app.get("/contact" , (req,res)=>{
    res.render("contact");
})

app.get("/certify" , (req,res)=>{
    res.render("certify");
})


app.listen(process.env.PORT || 3000 , ()=>{
    console.log("Server is listening on PORT");
})