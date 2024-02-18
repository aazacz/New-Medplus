import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



//slice for login purpose
export const loginslice = createSlice({
    name: "loginDoctor",
    initialState: {
      name: '',
      email: '',
      login: '',
      token: '',
      Picture: '',
      Department:'',
      Fellowship:'',
      Username:'',
      Date:[]
    },
    reducers: {
      loginDoctor:(state,action)=>{
         
            const { name, email, login, token,Picture } = action.payload;
    
      return {
        ...state,
        name: name,
        email: email,
        login: login,
        token: token,
        Picture: Picture,
      };
        }
      }
    })



    export const { loginDoctor } = loginslice.actions;
    export const DoctorloginsliceReducer = loginslice.reducer;