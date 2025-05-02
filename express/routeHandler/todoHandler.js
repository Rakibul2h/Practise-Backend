const express=require("express");
const router=express.Router();
const mongoose=require('mongoose');
const todoScema=require("../schema/todoSchema");
const Todo=new mongoose.model("Todo",todoScema)
// GET all the todo

router.get('/',async(req,res)=>{
    try{
      const data=  await Todo.find({status:'active'}).select({
        _id:0,
        date:0
      }).limit(2)
       res.status(200).json({result:data,messge:"data insert successfully"})
   }catch(error){
       res.status(500).json({error:"there is error"});
   }
   
});
// get a todo by id
router.get('/:id',async(req,res)=>{
    try{
        const data=  await Todo.find({_id:req.params.id}).select({
          _id:0,
          date:0
        }).limit(2)
         res.status(200).json({result:data,messge:"data insert successfully"})
     }catch(error){
         res.status(500).json({error:"there is error"});
     }
});

// post todo
router.post('/',async(req,res)=>{
    try{
         const newTodo=new Todo(req.body);  
        await newTodo.save();
        res.status(200).json({message:"success"});
        
    }catch(error){
        res.status(500).json({error:"there is error"});
    }
});

// post multiple todo
router.post('/all',async(req,res)=>{
    try{
        await Todo.insertMany(req.body);
        res.status(200).json({message:"success"});
    }catch(error){
        res.status(500).json({error:"error"});
    }

});

// put todo
router.put('/:id',async(req,res)=>{

    try{
        await Todo.updateOne({_id:req.params.id},{$set:{
            status:"active",
            title:" "
        }})
        res.status(200).json({message:"update success"});
    }catch(error){
        res.status(500).json({error:"error"});
    }
    
});
// delete todo
router.delete('/:id',async(req,res)=>{
  
        try{
            await Todo.deleteOne({_id:req.params.id});
            res.status(200).json({message:" deleted success"});
        }catch(error){
            res.status(500).json({error:"error"});
        }
    
});

module.exports=router;