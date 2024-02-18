import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore,REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { loginsliceReducer } from "../Slice/userSlice"; 
import { AdminloginsliceReducer } from "../Slice/adminSlice"; 
import { DoctorloginsliceReducer } from "../Slice/doctorSlice";  

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({ 
  login: loginsliceReducer,
  doctor: DoctorloginsliceReducer,
  admin: AdminloginsliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [REGISTER],
    },
  }),
  
});

export const persistor = persistStore(store);
