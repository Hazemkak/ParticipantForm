const express=require('express')
const router=require("express").Router();

//get the home page of form
router.get("/",(req,res)=>{
    res.render("Home");
});

router.post("/",(req,res)=>{
    var Name=req.body.firstName;
    Name+=" ";
    Name+=req.body.lastName;
    let errors=[];
    let success=[];
    //console.log(req.body);
    let {mail,phone,faculty,university,firstpref,secondpref}=req.body;
    if(!mail || !phone || !faculty || !university || firstpref==="Choose..." || secondpref==="Choose..." || !req.body.firstName || !req.body.lastName){
        errors.push({msg:"Please Fill In All Fields"});
    }
    if(phone.toString().length !==11){
        req.flash('error_msg',"Invalid Phone Number, Must Contain 11 Numbers");
        res.redirect("/");
    }
    if(errors.length>0){
        res.render("Home",{errors})
    }else{
        req.flash('success_msg',"Your Form Was Submitted Successfully");
        res.redirect("/");
    }
});

module.exports=router;