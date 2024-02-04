const mongoose = require("mongoose");

const patientSchema =  mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true 
    },
    houseName: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    district: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    pincode: {
        type: String,
        required: false
    },
    mobile: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    isAdmin:{
        type:Number,
        // required:true,
        default:0
    }

})


   
const patientdetails = new mongoose.model("patientdetail",patientSchema)
module.exports = patientdetails