require('dotenv').config();
const express=require('express')

const fs=require('fs')
const path=require('path');
const User=require('../db')

const router=express.Router();



router.get('/downloadFile',async(req,res)=>{

    const filePath=path.join(__dirname,'..','files','myresume.pdf')
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
 

module.exports = router;


