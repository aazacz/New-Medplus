const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  email:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
  Name: {
    type: String,
    required: true
  },
  Department: {
    type: String,
    required: true
  },
  Fellowship: {
    type: String,
    required: true
  },
  Date:[String], 
    
  
  Username: {
    type: String,
    required: true
  }
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
