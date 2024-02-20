import React, { useState,useEffect }  from "react";
import { useNavigate  }               from "react-router-dom";
import LoaderScreen                   from "../Common/LoaderScreen";    


const PrivateLoginRoute = ({children,...rest}) =>{

  let [loading, setLoading]              = useState(true);
  const [authenticated,Setauthenticated] = useState(false)
  const{AuthCheck,role}                  = rest

  const navigate                         = useNavigate();

  useEffect(()=>{
     
  const checkAuthentication = async()=>{
     
    const isAuthenticated = await AuthCheck() 
      
    if(isAuthenticated){
        setLoading(false)
        Setauthenticated(isAuthenticated)
        navigate(role === "User" ? "/userdashboard" : role === "Doctor" ? "/Doctordashboard" : "/Admindashboard");
        }else{
        setLoading(false)
        Setauthenticated(isAuthenticated)
      }
    }

    checkAuthentication()
  
    },[])

  
    if (authenticated) {
      return null; // Already navigated in useEffect
    }
     
 
    return (
      <>
        {loading && <LoaderScreen/>}
        {!authenticated ? children : null}
      </>
       
    ) 
  }


  export default PrivateLoginRoute