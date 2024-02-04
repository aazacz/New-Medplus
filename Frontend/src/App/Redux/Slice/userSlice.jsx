import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {persistStore} from "redux-persist"
// import storage from 'redux-persist/lib/storage'
import axios from "axios";

  

// const persistConfig={ // data to be saved as persist in the local storage
// key:'persist-store',
// storage
// }



//slice for login purpose
export const loginslice = createSlice({
  name: "loginUser",
  initialState: {
    name: "",
    email: "",
    login: false,
    token: "",
    houseName: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    mobile: "",
    phone: "",
    image: "",
    otp:""
  },
  reducers: {
    loginUser: (state, action) => {
    
      const { name, email, login, token,otp,image } = action.payload;
      console.log(name, email, login, token );
      return {
        ...state,
        name: name,
        email: email,
        login: login,
        token: token,
        image: image,
        otp:otp
      };
    },
    updateUserData: (state, action) => {
      // Merge the updated fields into the state
      return {
        ...state,
        ...action.payload,
      };
    }
  },


})

export const screensizeSlice = createSlice({
  name: "screensize",
  initialState: [],
  reducers: {
    size: (state, action) => {
        return {
        ...state,
        size: action.payload.size,
      }
    }
  }
})



export const { updateUserData } = loginslice.actions;
export const { loginUser } = loginslice.actions;
export const loginsliceReducer = loginslice.reducer;

export const { size } = screensizeSlice.actions;
export const screensizeReducer = screensizeSlice.reducer 