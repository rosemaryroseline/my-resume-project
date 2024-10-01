const express=require('express')
const port=5231
const mysql=require('mysql');
const cors=require('cors');
const app=express();
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));

  const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'myresume'
  })
  db.connect((err)=>{
    if(err){
        console.log('error while connecting',err)
        return;
    }
    console.log('connected to the database')
  })

  app.post('/contact',function(req,res){
const data=req.body
console.log('data recievd',data)
const query='insert into contact(Name,Email,Message)values(?,?,?)';
const values=[data.Name,data.Email,data.Message];
db.query(query,values,(err,result)=>{
    if(err){
        return res.status(500).json('error while storing data');
    }
    return res.status(200).json({message:'data recieved',user:result.insertId})
})
  })
app.listen(port,()=>{
    console.log(`server running on port http://localhost: ${port}`)
})