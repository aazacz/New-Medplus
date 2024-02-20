const express = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Doctor = require('../Model/doctorDb')
const fs = require('fs');
const path = require('path');



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
       
        const tokenProducer = req.body.email

        if (!req.body.email || !req.body.password) {
        return res.json({ message: "Enter Email And Password" });
}
       
        const user = await Doctor.findOne({ email: req.body.email })
            .catch((err) => {
            return res.json({ message: "Email doesnt match" })
               })
        

        if (!user) {  //if user not found in DB
            return res.json({ message: "Email doesnt match" })
        }
       
        const passwordmatch = await bcrypt.compare(req.body.password, user.password)
        
        if (passwordmatch) {

            const secure = {
                _id: tokenProducer,
                role:"Doctor"
                          } 
        
            const token = jwt.sign(secure, process.env.jwtsecretDoctor)
            console.log("3   Token produced and response sent")
            console.log(user.ProfilePicture)

            res.json({
                status: "success",
                name: user.name,
                token,
                login: true,
                email: tokenProducer,
                ProfilePicture:user.ProfilePicture
            })
        }
        else {
         console.log("4")

         return res.json({
                status: "failed",
                message: "Password is incorrect"
            });
        }

    
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Server error" });
    }

}












const signup = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const passwordbcrypt = await passwordHash(password);

        console.log(email, name, password);

        const newDoctor = new Doctor({
            email: email,
            name: name,
            password: passwordbcrypt
        })

        const newData = await newDoctor.save();
        console.log(newData);

        res.json({ status: "success", message: "User registered successfully" });
    } catch (error) {
        console.error("Error during user registration:", error.message);
        res.status(500).json({ status: "error", message: "Internal server error" });
    }
};


const checkAuth = async (req, res) => {
    try {
      if (req.role === "Doctor") {
        console.log("req.role is Doctor");
        res.status(200).json({ message: "Authorised" });
      } else {
        res.status(403).json({ message: "Access Denied" });
      }
    } catch (error) {
      console.error("Error in checkAuth:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
 





module.exports = {

    login,
    signup,
    checkAuth,
    
}
