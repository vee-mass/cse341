const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  firstName: { 
    type: String, 
    required: [true, 'First name is required'] 
  },
  lastName: { 
    type: String, 
    required: [true, 'Last name is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    unique: true // Prevents duplicate emails in your DB
  },
  favoriteColor: { 
    type: String 
  },
  birthday: { 
    type: String 
  }
});

// This exports the blueprint so the controller can use it
module.exports = mongoose.model('Contact', contactSchema);