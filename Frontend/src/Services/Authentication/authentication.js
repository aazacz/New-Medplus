import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie"
import axiosInstanceUser from '../AxiosInstance/User/AxiosUser';
import axiosInstanceDoctor from '../AxiosInstance/Doctor/AxiosDoctor';

export const UserLoginCheck = () => {
  return new Promise((resolve, reject) => {
    if (Cookies.get('UserjwtCookie')) {
      resolve(true)
    }
    else {
      resolve(false)
    }

  })
}



export const UserAuthCheck = () => {
  return new Promise((resolve, reject) => {
    if (Cookies.get('UserjwtCookie')) {
      axiosInstanceUser.get('/checkAuth')
        .then((res) => {
          if (res.data.message === "Authorised") {
            console.log("axios resolving true");
            resolve(true); // Resolve with true if authorized
          } else {
            console.log("axios resolving false");

            resolve(false); // Resolve with false if not authorized
          }
        })
        .catch((error) => {
          reject(error); // Reject the promise if there's an error
        });
    } else {
      resolve(false); // Resolve with false if no UserjwtCookie found
    }
  });
};


export const DocotorAuthCheck = () => {
  return new Promise((resolve, reject) => {
    if (Cookies.get('DoctorjwtCookie')) {
      console.log("if condition working");
      axiosInstanceDoctor.get('/checkAuth')
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "Authorised") {
          
            resolve(true);  // Resolve with true if authorized
          } else {
            console.log("not authorised and resolving false");

            resolve(false); // Resolve with false if not authorized
          }
        })
        .catch((error) => {
          console.log("error in auth check" + error);
          reject(error);    // Reject the promise if there's an error
        });
    } else {
      console.log("else condition working No Cookie Found");

      resolve(false);     
    }


  })
}