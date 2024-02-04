const express       = require("express");

const jwt           = require("jsonwebtoken");
const connectToMongoDB = require("./Config/mongodbServer");
const userRoute     = require('./Router/userRoute.js');
const adminRoute    = require("./Router/adminRoute.js")
const doctorRoute   = require("./Router/doctorRoute.js");
const app           = express()
const bodyParser = require('body-parser');
                      require('dotenv').config();
const port          = process.env.PORT 
const cors = require('cors');

       
app.use(cors())
app.use(express.json())
connectToMongoDB()
app.use(bodyParser.urlencoded({
     limit: '50mb',
    extended: true
  }));

app.use('/', userRoute)
app.use('/doctor', doctorRoute)
app.use('/admin', adminRoute)
   


app.listen(port,()=>console.log("Backend Server is Running"))