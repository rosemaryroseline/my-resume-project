// const express = require('express');
// const cors = require('cors');
// const db = require('./db'); 


// const app = express();
// const port = 3000;  // Common port

// // Middleware
// app.use(express.json());
// app.use(cors({
//     origin: 'http://localhost:4200',
//     methods: ['POST', 'GET', 'PUT'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
//     credentials: true
// }));


// app.set('db', db);


// // Import and use route modules
// const authRoutes = require('./routes/signin');
// const contactRoutes = require('./routes/contact');
// // const fileRoutes = require('./routes/readingFiles');

// app.use('/signin', authRoutes);  // All authentication routes under '/auth'
// app.use('/contact', contactRoutes);  // All contact routes under '/contact'
// // app.use('/readingFiles', fileRoutes);  // All file routes under '/files'

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });


const express=require('express')
const mongoose=require('mongoose');
const routes=require('./routes/signin');
const route=require('./routes/readingFiles');
const contact=require('./routes/contact');

const cors=require('cors')
const cookieParser=require('cookie-parser');
const app=express();

app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}))
app.use(cookieParser())
app.use(express.json())
app.use('/api',routes)
app.use('/api',route);
app.use('/api',contact);

mongoose.connect("mongodb://localhost:27017/my-portfolio",{
    useNewUrlParser:true,
   }).then(()=>{
    console.log('connected to database');
    app.listen(1275,()=>{
        console.log('server is running');
    })
   })