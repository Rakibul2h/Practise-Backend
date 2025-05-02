const express=require('express');

const publicRouter=express.Router();

const log=(req,res,next)=>{
    console.log("I am logging something!");
    next();
}

publicRouter.use(log);

publicRouter.get('/',(req,res)=>{
    res.send("public home");
})
publicRouter.get('/tv',(req,res)=>{
    res.send("public tv room");
})


module.exports=publicRouter