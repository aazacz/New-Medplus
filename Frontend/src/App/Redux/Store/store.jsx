import { configureStore } from "@reduxjs/toolkit";
import { loginsliceReducer } from "../Slice/userSlice"; 
import { AdminloginsliceReducer } from "../Slice/adminSlice"; 


export default configureStore({

reducer:{
        login: loginsliceReducer,
      
        admin:AdminloginsliceReducer,
        }

})


 

