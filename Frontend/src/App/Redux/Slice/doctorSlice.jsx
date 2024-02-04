import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



//slice for login purpose
export const loginslice = createSlice({
    name: "loginUser",
    initialState: [],
    reducers: {
        loginUser:(state,action)=>{
            // state.name  = action.payload.name,
            // state.email = action.payload.email,
            // state.login = action.payload.login,
            // state.token = action.payload.token
            const { name, email, login, token,image } = action.payload;
    
      return {
        ...state,
        name: name,
        email: email,
        login: login,
        token: token,
        image: image,
      };
        }
      }
    })



    export const { loginUser } = loginslice.actions;
    export const loginsliceReducer = loginslice.reducer;