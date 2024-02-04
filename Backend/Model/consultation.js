const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true, // Name is required
  },
  Department: {
    type: String,
    required: true, // Department is required
  },
  Doctor: {
    type: String,
    required: true, // Doctor is required
  },
  Date: {
    type: String, // You can change the data type to match your requirements
  },
});

const consultation = new mongoose.model('Consultation', consultationSchema);

module.exports = consultation ;
