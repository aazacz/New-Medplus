const fs = require('fs');
const path = require('path');

const DoctorProfileImage=(req,res)=>{
    try {
       
       
        const dataUrl = req.body.imgData
        const base64Data = dataUrl.replace(/^data:image\/(jpeg|png);base64,/, '');
        console.log("base64Data   :" +base64Data);
        const imageData = Buffer.from(base64Data, 'base64');

        const fileName = `image_${Date.now()}.png`;
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

