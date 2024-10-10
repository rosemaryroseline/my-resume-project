const express=require('express');
const contact=require('../contactdb')

const router=express.Router()

router.post('/contact',async(req,res)=>{
 try{
  const {name,email,message}=req.body

  const newContact=new contact({
    name,
    email,
    message
  })
   await newContact.save();
   res.status(200).json({message:'contact saved successfully'});
 }catch(err){
res.status(404).json({message:'error is saving contact'});
 }
})
module.exports=router;