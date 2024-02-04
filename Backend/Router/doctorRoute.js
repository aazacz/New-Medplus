const express = require("express")
const doctorRoute = express()
const doctorController = require('../Controller/doctorController')
const auth              = require('../middleware/authentication') 
const multer            = require('multer')
const imageUploadController = require("../Controller/ImageUploadController")
const path          = require('path')

doctorRoute.use(express.json())
doctorRoute.use(express.urlencoded({extended:true}))

const Authentication = auth("Doctor")

// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"../Frontend/public")
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
//     }
// })
const storage = multer.memoryStorage()

const upload = multer({  storage:storage  })

doctorRoute.get("/checkAuth",Authentication,doctorController.checkAuth);


doctorRoute.get("/login", doctorController.login);
doctorRoute.post("/login", doctorController.login);
doctorRoute.post("/signup", doctorController.signup);
doctorRoute.post("/saveimage", upload.single('blob'), imageUploadController.DoctorProfileImage);





module.exports = doctorRoute