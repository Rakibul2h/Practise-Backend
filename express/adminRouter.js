const express=require('express');
const adminRouter=express.Router();

adminRouter.get('/',(req,res)=>{
    res.send("Dashboard");
})

adminRouter.get('/about',(req,res)=>{
    res.send("In the admin about");
})

module.exports=adminRouter;