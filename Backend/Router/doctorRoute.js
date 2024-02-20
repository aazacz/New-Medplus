const express = require("express")
const doctorRoute = express()
const doctorController = require('../Controller/doctorController')
const auth              = require('../Middleware/authentication') 
const multer            = require('multer')
const imageUploadController = require("../Controller/ImageUploadController")
const path          = require('path')
doctorRoute.use(express.json())
doctorRoute.use(express.urlencoded({extended:true}))



const Authentication = auth("Doctor")

const storage = multer.memoryStorage()

const upload = multer({  storage:storage  })

doctorRoute.get("/checkAuth",Authentication,doctorController.checkAuth);


doctorRoute.get("/login", doctorController.login);
doctorRoute.post("/login", doctorController.login);
doctorRoute.post("/signup", doctorController.signup);
doctorRoute.post("/saveimage", upload.single('blob'),Authentication,imageUploadController.DoctorProfileImage);





module.exports = doctorRoute