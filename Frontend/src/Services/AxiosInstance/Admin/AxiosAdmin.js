import  axios  from "axios";
import Cookies from "js-cookie"

const baseURL = `http://localhost:6002/`
const axiosInstanceAdmin = axios.create()


// ADD REQUEST INTERCEPTOR
axiosInstanceAdmin.interceptors.request.use(function(config){

    config.baseURL = baseURL
    const Role = "Admin";
    const token = Cookies.get(`${Role}jwtCookie`);
    console.log(`authorization-key ${token}`);
   
    if (token) {
        config.headers.Authorization = `${token}`;
      }
    return config;
},function (error) {
    return Promise.reject(error)
}
)

// ADD RESPONSE INTERCEPTOR
axiosInstanceAdmin.interceptors.response.use(function (response) {
     
    console.log ( "response received"    + response.data.message);
    
    if(response.data.message === "TimedOut"){
         Cookies.remove('AdminjwtCookie')
   }
   return response;

},function (error) {
    return Promise.reject(error);
  })

  export default axiosInstanceAdmin