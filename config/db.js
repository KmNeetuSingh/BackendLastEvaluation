const mongoose = require('mongoose');
require("dotenv").config();
const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI; 
    await mongoose.connect(dbURI);
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
