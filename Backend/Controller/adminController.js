const express   = require("express")
const bcrypt    = require('bcrypt')
const jwt       = require('jsonwebtoken')
const otpGenerator  = require('otp-generator')
const adminDB   = require("../Model/adminDb.js")
const doctorDB = require("../Model/doctorDb.js")
const passwordHash = async (password) => {
    try {
      const passwordHash = await bcrypt.hash(password, 5);
      console.log(passwordHash);
      return passwordHash;
    } catch (error) {
      console.log(error.message);
    }
  };

  
  const login = async (req, res) => {

    try {
      console.log(req.body.email);
      const tokenProducer = req.body.email
  
      console.log("1")
      const User = await adminDB.find()
      const user = await adminDB.findOne({  email: req.body.email,isAdmin: 1})
      console.log("finded user" + user);
      console.log("finded user" + User);
  
      if (!user) {  //if user not found in DB
        return res.json({ message: "Email or password doesnt match" })
      }

      if(user.isAdmin===1){
        const secure = {
                      _id: tokenProducer,
                      role:"Admin"}
         
          const token = jwt.sign(secure, process.env.jwtsecretAdmin)
                 
    
            res.json({
              status: "success",
              name: user.name,
              token,
              login: true,
              email: tokenProducer
            })
        
      }
     }
    catch (error) {
      console.log(error);
      res.status(500).json({ status: "error", error: "Server error" });
    }
  
  }


  const getUser = async (req,res)=>{
    try {
    
      const encodedValue = req.query.data;
      console.log("encodedValue");
      console.log(encodedValue);
      const user = await adminDB.find().catch((err) => {
      console.log("Error in finding" + err);
      })
     console.log(user);
    
     
    res.json({
      status: "success",
     user:user
     })
    
    
    } catch (error) {
      console.log(error);
    }
     
    }


    const getDoctors= async(req,res)=>{


      try {
        
        const Doctors = await doctorDB.find().catch((err) => {
          console.log("Error in finding" + err);  
          })
console.log(Doctors);
          res.json({
            status: "success",
            Doctors
           })
      } catch (error) {
        console.log(error);
      }
    }





    const addDoctor = async (req, res) => {
      try {
        const OTP = otpGenerator.generate(9, {
          digits:             true,
          alphabets:          true,
          upperCaseAlphabets: false,
          lowerCaseAlphabets: true,
          specialChars:       true,
      });
        const passwordbcrypt = await  passwordHash(OTP);
        console.log(OTP);
        console.log(req.body);
        console.log(`${req.body.Username}@medplus.com`);
    
         const newUser = new doctorDB({
           email: `${req.body.Username}@medplus.com`,
           Name: req.body.Name,
           password: passwordbcrypt,
           Fellowship:req.body.Fellowship,
           Username:req.body.Username,
           Date:req.body.Date,
           Department:req.body.Department,

         })
         console.log(newUser);
        const newData = await newUser.save();
        console.log(newData);
    
        res.json({ status: "success", message: "User registered successfully" });
      } catch (error) {
        console.error("Error during user registration:", error.message);
        res.status(500).json({ status: "error", message: "Internal server error" });
      }
    };
    


  module.exports = {

    login,
    addDoctor,
    getUser,  
   getDoctors,
    // generateotp,
    // otplogin
  }
  