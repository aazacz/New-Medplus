import React, { useState, useEffect } from "react";
import { useNavigate }                from "react-router-dom";
import LoaderScreen                   from "../Common/LoaderScreen";

const PrivateRoute = ({children, ...rest}) => {

  let [loading, setLoading] = useState(true);
  const [authenticated, Setauthenticated] = useState(false)
  const { AuthCheck,role } = rest;

  const navigate = useNavigate();

useEffect(() => {

const checkAuthentication = async () => {
      const isAuthenticated = await AuthCheck()
      console.log("isAuthenticated  is " + isAuthenticated);


      if (isAuthenticated) {
        setLoading(false)
        Setauthenticated(isAuthenticated)
      } else {
        Setauthenticated(isAuthenticated)
        // navigate(`/${navigateto}`, { replace: true })
        navigate(role === "User" ? "/login" : role === "Doctor" ? "/Doctor" : "/Admin",{replace: true});
      }
    }

    checkAuthentication()

  }, [])


  return (

    <>
      {loading && <LoaderScreen />}
      {authenticated ? children : null}
    </>
  )

}


export default PrivateRoute