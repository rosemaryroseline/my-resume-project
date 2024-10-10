const {Router}=require('express');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const User=require('../db')

const router=Router()

const JWT_SECRET = 'gdstf@tvehwi@uhg@gcb';
router.post('/register',async(req,res)=>{
  let {name,email,password}=req.body

  const salt=await bcrypt.genSalt(10)
  const hashedPassword=await bcrypt.hash(password,salt);

  const record=await User.findOne({email:email});
  if(record){
    return res.status(400).send({message:"Email is already registered"})
  }else{


const user=new User({
  name:req.body.name,
  email:email,
  password:hashedPassword
})
const result=await user.save()

const {_id}=await result.toJSON();
const token=jwt.sign({_id:_id},JWT_SECRET)
res.cookie('jwt',token,{
  httoOnly:true,
  maxAge:24*60*60*1000
})

res.send({message:'success',token:token});
}
})

router.post('/login',async(req,res)=>{
  const user=await User.findOne({email:req.body.email})
  if(!user){
    return res.status(404).send({message:"User not found"})
  }
  if(!(await bcrypt.compare(req.body.password,user.password))){
    return res.status(400).send({
      message:"Password is Incorrect"
    })
  }
  const token=jwt.sign({_id:user._id},JWT_SECRET)
  res.cookie('jwt',token,{
    httpOnly:true,

    maxAge:24*60*60*1000

  })
  res.send({message:"success"});
})

router.get('/user',async(req,res)=>{
    try{
const cookie=req.cookies['jwt']
const claims=jwt.verify(cookie,JWT_SECRET)
if(!claims){
  return res.status(401).send({message:'unauthenticated'})
}

const user=await User.findOne({_id:claims._id})
const {password,...data}=await user.toJSON();
res.send(data)
    }catch(err){
return res.status(401).send({message:'unauthenticated'})
    }
})



module.exports=router