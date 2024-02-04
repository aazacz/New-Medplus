const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({

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


const Admin= new mongoose.model("Admin",AdminSchema)
module.exports=Admin