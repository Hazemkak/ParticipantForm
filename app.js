const express=require("express");
var bodyParser=require("body-parser");
const mongoose=require("mongoose");
const flash=require("connect-flash");
const session=require("express-session");
const request=require("request");
const https=require("https");

const app=express();

//EJS & Styles & bodyParser
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({extended:true}));

//express Session
app.use(session({
    secret:"msg",
    resave:true,
    saveUninitialized:true,
}))

//Connect Flash
app.use(flash());
//Global vars
app.use((req,res,next)=>{
    res.locals.success_msg=req.flash('success_msg');
    res.locals.error_msg=req.flash('error_msg');
    res.locals.error=req.flash('error');
    next();
})


app.use('/',require("./routes/index"));

const PORT = process.env.PORT || 3000;

app.listen(PORT,console.log("Connected on "+PORT.toString()));