require('dotenv').config(); 
const express = require('express');
const connectDB = require('./config/db'); 
const libraryRoutes = require('./routes/libraryRoutes'); 

const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB URI and Port from environment variables
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 4000;

// Connect to Database
connectDB(MONGO_URI) 
    .then(() => console.log('Database connected successfully'))
    .catch((err) => {
        console.error('Database connection failed:', err.message);
        process.exit(1); 
    });

// API Routes
app.use('/api', libraryRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
