const express=require('express')
const cors=require('cors')
const mysql=require('mysql')
const bcrypt=require('bcrypt')
const app=express()
const port=2341;
app.use(express.json())
// app.use(cors({origin:'http://localhost:4200',methods:['POST','GET'],allowedHeaders:['content-Type:application/json'],credentials:true}));
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
    console.log('connected to mysql database');
})
app.post('/register',async function (req,res){
const data=req.body
console.log('data rev',data)
// if(!data){
//     return res.status(500).json('error occured while recieving data')
// }
// return res.status(200).json({message:'data recived',Data:data})

// const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
try{
    const emailCheck='select * from table sign_up where email=?'
    db.query(emailCheck,[data.email],(err,result)=>{
        // if(result.length>0){
        //     return res.status(400).json('Email already exist');
        // }
        bcrypt.hash(data.password,10,(err,hash)=>{
            if(err){
                return res.status(500).json({message:'error while processing data'});

            }
            const query='insert into sign_up(email,fullName,password)values(?,?,?)';
            const values=[data.email,data.fullName,hash]
            db.query(query,values,(err,result)=>{
                if(err){
                    return res.status(500).json('error while processing data');

                }
                return res.status(200).json({user:'data recievd successfully',userId:result.insertId})
            })
        })
    })
//     const hashpassword=await bcrypt.hash(data.password,10);
//     const query='insert into sign_up(email,fullName,password)values(?,?,?)'
// const values=[data.email,data.fullName,hashpassword];
// db.query(query,values,(err,result)=>{
// if(err){
//     return res.status(500).json('error while recieving data')
// }
// return res.status(200).json({message:'data recived success', userId: result.insertId})
// })
}catch(error){
    return res.status(500).json('error while processing the password');
}

})
app.get('/emailVerify',function(req,res){
const email=req.query.email;
const query='select * from sign_up where email=?';
db.query(query,[email],(err,result)=>{
    if(err){
        return res.status(500).json({message:'server error'})

    }
    return res.json(result.length>0)
})
})

app.post('/login',async function(req,res){
    const {email,password}=req.body
   
    const user=await new Promise((resolve,reject)=>{
        db.query('select * from sign_up where email=?',[email],(err,result)=>{
            if(err){
                return reject(err);
            }
            return resolve(result);
        })
       
    })
    console.log(user)
    if (!user || user.length === 0) {
        return res.status(401).json('Invalid email or password'); 
    }
    const isMatch=await bcrypt.compare(password,user[0].password)
   if(!isMatch){
    return res.status(500).json('Invalid email and password')

   }
    res.status(200).json({message:'login successfull',user:user[0]});
})




app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})