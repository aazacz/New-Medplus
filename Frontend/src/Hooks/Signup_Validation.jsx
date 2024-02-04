import React, { useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import axiosInstanceUser from "../Services/AxiosInstance/User/AxiosUser";
//check if email is valid
export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
};

//Check for duplicate email
export const duplicateEmail = async (email) => {

  return new Promise((resolve, reject) => {

    axiosInstanceUser.post("checkEmailDuplicates", { email: email })
      .then(data => resolve(data.data.status))
      .catch(error => reject(error));
  });
}


//check if name have valid length
export const isValidNameLength = (name) => {
  const minLength = 2;
  const maxLength = 20;
  return name.length >= minLength && name.length <= maxLength;
};


export const isValidNameCharacters = (name) => /^[a-zA-Z\s]+$/.test(name); //check if name contains invalid character

export const isNotEmptyName = (name) => /\S/.test(name);                  //check if name is empty

export const validatePasswordLength = (password) => password.length >= 6; //check if password is greater or equal to length of six

export const validatePhone = (phone) => phone.length === 10;

export const validatePincode = (pincode) => pincode.length === 6;



/* -------------------Custom Hook for Name checking--------------------------------- */

const useCheckName = () => {

  const [NameError, SetNameError] = useState(false)

  const check = (name) => {
    SetNameError(false)

    try {
     
      if (name === "") {
        return
      }

      if (!isValidNameLength(name)) {
              SetNameError(false)
              toast.error('Name Length should be 2 to 20 characters');
              return
      }
      else if (!isValidNameCharacters(name)) {
              SetNameError(false)
              toast.error('Name should not contain any characters');
              return
      }
      else {
               SetNameError(true)
      }

    } catch (error) {
      toast.error("Error validating name:" + error);
    }
  }
  return { NameError, check }
}

/* -------------------Custom Hook for email checking--------------------------------- */
export const usecheckEmail = (initaialvalue) => {

  const [EmailError, SetEmailError] = useState(false)

  const checkEmail = async (email) => {


    SetEmailError(false);
    try {
      if (email === "") {
        return
      }
      if (!validateEmail(email)) {
        SetEmailError(false);
        toast.error("Invalid Email Format, Check Again");

        return;
      } else {

        const status = await duplicateEmail(email);
        if (!status) {
          SetEmailError(false);
          toast.error("Email already Exist, Try another Email ID");

          return;
        } else {

          SetEmailError(true);
        }
      }
    } catch (error) {
      toast.error("Error finding email:" + error);



    }

  };

  return { checkEmail, EmailError }
}


/* -------------------Custom Hook for password checking--------------------------------- */

export const useCheckPassword = (initialvalue) => {

  const [PasswordError, SetPasswordError] = useState(false)

  const check = (password) => {

    SetPasswordError(false)

    try {
      
      if(password ===""){
        return
      }

      if (!validatePasswordLength(password)) {
        toast.error("Password must be atleast 6 characters long")
        SetPasswordError(false)
        return
      }

      SetPasswordError(true)




    } catch (error) {
      toast.error("error in password validation function : " + error)
    }

  }


  return { check, PasswordError }
}


/* -------------------Custom Hook for password checking--------------------------------- */
export const useRepasswordcheck = (initialvalue)=>{
 
  const [RePasswordError, SetRePasswordError] = useState(false)
  


  const check=(password,repassword)=>{
    SetRePasswordError(false)
try {
  if(repassword===""){
    return
  }
  
  if(password!==repassword && !validatePasswordLength(repassword)){
    toast.error("Password doesn't match")
    SetRePasswordError(false)
    return
  }
  if(password.length!==repassword.length){
    toast.error("Password doesn't match")
    SetRePasswordError(false)
    return
  }

  SetRePasswordError(true)

} catch (error) {
 
  toast.error("error in password validation function : " + error)
  
}
}

return{check,RePasswordError}

}



export default useCheckName;
