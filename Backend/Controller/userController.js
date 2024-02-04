const express = require("express")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../Model/userDb.js')
const { jwtsecretUser, EXPIRES_IN } = process.env;
const otpGenerator = require('otp-generator')
const nodemailer = require('nodemailer')
const Otp = require('../Model/otpdb.js')
const consultation = require('../Model/consultation.js')

const passwordHash = async (password) => {
  try {
    const passwordHash = await bcrypt.hash(password, 5);
    return passwordHash;
  } catch (error) {
    console.log(error.message);
  }
};

const verifyToken = (token) => {
  const userVer = jwt.verify(token, "mynameisabhilashabinzachariah")
}



const checkAuth = async (req, res) => {
  try {
    console.log("debug 6");
    if (req.role === "User") {
      console.log("debug 7");
      res.status(200).json({ message: "Authorised" });
    } else {
      res.status(403).json({ message: "Access Denied" });
    }
  } catch (error) {
    console.error("Error in checkAuth:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};




const login = async (req, res) => {

  try {

    const tokenProducer = req.body.email
    const user = await User.findOne({ email: req.body.email }).catch((err) => {
               return res.json({ message: "Email doesnt match" })
    })


    if (!user) {  //if user not found in DB
      return res.json({ message: "Email doesnt match" })
    }

    const passwordmatch = await bcrypt.compare(req.body.password, user.password)

    if (passwordmatch) {


      const secure = {
        _id: tokenProducer,
        role: "User"
      }


      const token = jwt.sign(secure, jwtsecretUser, { expiresIn: EXPIRES_IN })
      console.log(token);

      const userVer = jwt.verify(token, jwtsecretUser)
      console.log(userVer);
    


      res.json({
        status: "success",
        name: user.name,
        token,
        login: true,
        email: tokenProducer
      })
    }
    else {
      return res.json({
        status: "failed",
        message: "Password is incorrect"
      });
    }




  }
  catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", error: "Server error" });
  }

}

const signup = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const passwordbcrypt = await passwordHash(password);

    console.log(email, name, password);

    const newUser = new User({
      email: email,
      name: name,
      password: passwordbcrypt
    })

    const newData = await newUser.save();
    console.log(newData);

    res.status(200).json({ status: "success", message: "User registered successfully" });
  } catch (error) {
    console.error("Error during user registration:", error.message);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};



const getUser = async (req, res) => {
  try {
    const encodedValue = req.query.data;
    console.log("encodedValue");
    console.log(encodedValue);
    const user = await User.findOne({ email: encodedValue }).catch((err) => {
      console.log("Error in finding" + err);
    })
    console.log(user);


    res.json({
      status: "success",
      name: user?.name,
      email: user?.email,
      houseName: user?.houseName,
      city: user?.city,
      district: user?.district,
      state: user?.state,
      pincode: user?.pincode,
      mobile: user?.mobile,
      phone: user?.phone,
      image: user?.image,
    })


  } catch (error) {
    console.log(error);
  }

}


const updateProfile = async (req, res) => {

  try {
    if (req.file) {
      console.log(req.file.filename);
      console.log(req.body.name);
      console.log(req.body.email);


      const updatedata = {
        name: req.body.name,
        email: req.body.email,
        houseName: req.body.houseName,
        city: req.body.city,
        district: req.body.district,
        state: req.body.state,
        pincode: req.body.pincode,
        mobile: req.body.mobile,
        phone: req.body.phone,
        image: req.file.filename,
      };


      const userdata = await User.updateOne({ email: req.body.email }, { $set: updatedata })
      const { name, email, houseName, city, district, state, pincode, mobile, phone } = req.body

      return res.json({
        Status: "success",
        name, email, houseName, city, district, state, pincode, mobile, phone,
        image: req.file.filename
      });

    }
    else {

      console.log(req.body.name);
      console.log(req.body.email);

      const updatedata = {
        name: req.body.name,
        email: req.body.email,
        houseName: req.body.houseName,
        city: req.body.city,
        district: req.body.district,
        state: req.body.state,
        pincode: req.body.pincode,
        mobile: req.body.mobile,
        phone: req.body.phone,

      };

      const userdata = await User.updateOne({ email: req.body.email }, { $set: updatedata })

      const { name, email, houseName, city, district, state, pincode, mobile, phone } = req.body;

      return res.json({
        Status: "success",
        name, email, houseName, city, district, state, pincode, mobile, phone, image: userdata.image,
      });

    }

  } catch (error) {
    console.log(error);

  }
}

const createConsultation = async (req, res) => {
  try {
    console.log("create consultation");

    const { Name, Department, Doctor, Date } = req.body

    console.log(Name, Date);
    console.log(Department, Doctor);

    const newDocument = new consultation({
      Name: req.body.Name,
      Department: req.body.Department,
      Doctor: req.body.Doctor,
      Date: req.body.Date,
    });

    // Save the document to the database
    newDocument.save()


    res.json({ message: "Success" })

  }
  catch (err) {
    console.log(err);
  }

}


const generateotp = async (req, res) => {
  try {

    const OTP = otpGenerator.generate(8, {
      digits: true,
      alphabets: false,
      upperCaseAlphabets: true,
      lowerCaseAlphabets: false,
      specialChars: true,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "abhilashabinz@gmail.com",
        pass: "otjhcsnvnhknygrh",
      },
    });

    var mailOptions = {
      from: "abhilashabinz@gmail.com",
      to: req.body.email,
      subject: "OTP VERIFICATION",
      text: "PLEASE ENTER THE OTP FOR LOGIN " + OTP,
    };
    transporter.sendMail(mailOptions, function (error, info) { });
    console.log(OTP);

    const otp = new Otp({ email: req.body.email, otp: OTP });
    const salt = await bcrypt.genSalt(10);
    otp.otp = await bcrypt.hash(otp.otp, salt);
    const result = await otp.save();


    return res.json({ status: "success", OTP: OTP })
  } catch (error) {
    console.log(error.message)

  }
}


const otplogin = async (req, res) => {

  try {
    const LoginDetail = req.body;
    console.log(LoginDetail.email);
    const tokenProducer = LoginDetail.email

    console.log("1")
    const emailObject = { email: `${LoginDetail.email}` };

    const user = await User.findOne(emailObject).catch((err) => {
      console.log("Error in finding" + err);
    })
    console.log("finded user" + user);

    if (!user) {  //if user not found in DB
      return res.json({ message: "Email or password doesnt match" })
    }
    const userOtp = await Otp.findOne({ email: LoginDetail.email }).catch((error) => {

      console.log("error in the otp finding" + error);
      return res.json({ message: "OTP Expired" })
    })

    if (user) {
      console.log("user matched")
      const otpmatch = await bcrypt.compare(LoginDetail.otp, userOtp.otp)
      console.log(otpmatch);
      if (otpmatch) {
        console.log("OTP Matched")

        const token = jwt.sign({ _id: tokenProducer }, jwtsecret)
        console.log(token);
        const userVer = jwt.verify(token, jwtsecret)
        console.log(userVer);
        console.log("password verified");
        res.json({
          status: "success",
          name: user.name,
          token,
          login: true,
          email: tokenProducer
        })
      } else {
        res.json({
          status: "failed",
          name: "user.name",
          token: "",
          login: false,
          email: ""
        })

      }

    }



  } catch (error) {
    console.log(error);
    console.log(error.message);
  }



}



/*-------------------------------- checking for Email Duplication before signup --------------------------------------*/
const checkEmailDuplicates = async (req, res) => {
  try {
   
    const userExists = await User.find({ email: req.body.email })
    const documentsExist = userExists.length > 0;
  
    if (documentsExist) {
    
      res.json({ status: false, message: "Email Already Exists" })
    }
    else {
     
      res.json({ status: true, message: "Email not found" })
    }

  } catch (error) {
    
    throw error
  }
}


module.exports = {

  login,
  signup,
  getUser,
  updateProfile,
  generateotp,
  otplogin,
  checkAuth,
  createConsultation,
  checkEmailDuplicates
}
