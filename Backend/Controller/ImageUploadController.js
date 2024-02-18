const fs = require('fs');
const path = require('path');
const multer = require('multer')
const multers3 =  require('multer-s3')
const AWS = require('aws-sdk')
const { AccessKeyId,SecretAccessKey,AWSBucketName } = process.env;
const bucket = AWSBucketName
const Doctor = require('../Model/doctorDb')


//AWS Confifguration
AWS.config.update({
  accessKeyId: AccessKeyId,
  secretAccessKey: SecretAccessKey
})

const s3=new AWS.S3() //created an  instance of S3
const upload = multer({
  storage:multers3({
    s3:s3,
    bucket:bucket,
    acl:"public-read",
    contentType:multers3.AUTO_CONTENT_TYPE,
    KEY: function(req,file,cb){
      cb(null, 'Profile_' + Date.now() + path.extname(file.originalname));
    }

  })
})


const DoctorProfileImage=(req,res)=>{
    try {
        
        const userId = req.userId
        const dataUrl = req.body.imgData
        const base64Data = dataUrl.replace(/^data:image\/(jpeg|png);base64,/, '');
        console.log("base64Data   :");
        let imageData = Buffer.from(base64Data, 'base64');

        
          s3.upload(   {
            Bucket: bucket,
            Key: `Doctorimage_${Date.now()}.png`, // Unique key for the file
            Body: imageData,
            ACL: 'public-read', // Set ACL to public-read if you want the file to be publicly accessible
            ContentType: 'image/png' // Set the content type of the file
          },
          async function(err, data) {
            if (err) {
              console.error(err);
              res.status(500).json({ error: 'Error uploading to S3' });
            } else {
              console.log("data");
              
              await Doctor.updateOne({email:userId},{$set:{ProfilePicture:data.Location}}, { upsert: true } ).then((res)=>console.log(res)).catch((err)=>{console.log(err);})
              
              res.status(200).json({ status: true });
            }
          }
        );

     
        
         
      
    } catch (error) {
        console.log(error);
        throw error
    }
    

  }



const UserProfileImage=(req,res)=>{
    try {
       
       
        const dataUrl = req.body.imgData
        const base64Data = dataUrl.replace(/^data:image\/(jpeg|png);base64,/, '');
        // console.log("base64Data   :" +base64Data);
        const imageData = Buffer.from(base64Data, 'base64');

        const fileName = `Profile_${Date.now()}.png`;
        console.log(fileName);
        // Specify the path where you want to save the image
       
        const filePath = path.join("../Frontend/", 'public', fileName);
        console.log(filePath);

        fs.writeFile(filePath,imageData,'binary', (err) => {
            if (err) {
              console.error(err);
              res.status(500).json({ error: 'Internal Server Error' });
            } else {
              res.status(200).json({ status: true });
            }
          });
      
    } catch (error) {
        console.log(error);
        throw error
    }
    

  }

  module.exports = {UserProfileImage,DoctorProfileImage}

