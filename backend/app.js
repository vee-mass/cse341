require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect'); 

const app = express();
const port = process.env.PORT || 8080; 

connectDB();

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true })) 
  .use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});