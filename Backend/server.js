

// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/signin');
const route = require('./routes/readingFiles');
const contact = require('./routes/contact');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

// Use environment variables
const PORT = process.env.PORT || 3000; // Default to port 3000 if not defined
const MONGODB_URL = process.env.URL;
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}));
app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/api', routes);
app.use('/api', route);
app.use('/api', contact);

// Connect to MongoDB
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Connected to database');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Database connection error:', err);
});
