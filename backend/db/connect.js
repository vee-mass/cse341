const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Successfully connected to MongoDB via Mongoose');
  } catch (err) {
    console.error('Connection to MongoDB failed:', err.message);
    process.exit(1); // Stop the app if it can't connect
  }
}

module.exports = connectDB;