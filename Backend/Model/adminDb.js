const mongoose = require("mongoose");

const AdminSchema =new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type:Number,
        required:true,
        default:0 
    }

})
 

const Admin=  mongoose.model("Admins",AdminSchema)
module.exports=Admin