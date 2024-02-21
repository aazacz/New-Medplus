
const mongoose = require('mongoose')
 require('dotenv').config()  //env
 const {mongooseConnectionId,mongoosePassword} = process.env;

const password = encodeURIComponent(mongoosePassword); //password URLencoding
const connection = `mongodb+srv://aazachariah11:${password}${mongooseConnectionId}`;

// const connectToMongoDB = async () => {
    
//       try {
//             await mongoose.connect("mongodb://0.0.0.0:27017/UserDataCollection", {
//               useNewUrlParser: true,
//               useUnifiedTopology: true,
//             });
//             console.log("MongoDB Connected...");
//           } catch (err) {
//             console.log("Failed to Connect...", err);
//           }



//     };

const connectToMongoDB = async () => {
      await mongoose.connect(connection,{
     
     
  
}).then(()=>{
      console.log(`Connected to MongoDB Atlas`);
}).catch((error)=>{
      console.log(error.message);
      console.log("Not Connected");
})

};  


module.exports = connectToMongoDB