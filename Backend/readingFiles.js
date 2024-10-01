const express=require('express')
const cors=require('cors')
const port=6512
const app=express();
const fs=require('fs')
const path=require('path');

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['POST', 'GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));


app.get('/downloadFile',async(req,res)=>{
// const path=['files','file.txt']
    const filePath=path.join(__dirname,'..','Backend','files','myresume.pdf')
    console.log('reading file',filePath)
    res.download(filePath,(err)=>{
        if(err){
            console.log('error in reading file')
            return res.status(500).json('error in downloading file')
          
        }
        // return res.status(200).json({fileContent:result.fileContent})
        console.log('file download success')
    })
})
 
app.get('/read',async(req,res)=>{
   let fileName=''
    const type=req.query.type
    switch(type){
     case 'Isaiah':
     fileName='Isaiah.txt';
      break;
      case 'Jeremiah':
      fileName='Jeremiah.txt';
        break;
        case 'John':
        fileName='John.txt';
            break;
            case 'Proverbs':
            fileName='proverbs.txt';
            break;
            case 'Deuteronomy':
            fileName='Deuteronomy.txt';
                break;
    }
    const filePath=path.join(__dirname,'..','Backend','files',fileName)
    fs.readFile(filePath, 'utf-8',(err,result)=>{
        if(err){
            return res.status(500).json('error in reading file');
        }
       res.send(result);
    })
})
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})


