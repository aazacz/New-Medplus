import  axios  from "axios";
import Cookies from "js-cookie"


const apiUrl = import.meta.env.VITE_API_URL
const baseURL = apiUrl
const axiosInstanceUser = axios.create()


// ADD REQUEST INTERCEPTOR
axiosInstanceUser.interceptors.request.use(function(config){

    config.baseURL = baseURL
    console.log("Interceptor Req Send");
    const Role = "User";
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
axiosInstanceUser.interceptors.response.use(function (response) {
    
  
    console.log ( "response received"    + response.data.message);
    
    if(response.data.message === "TimedOut"){
         Cookies.remove('UserjwtCookie')
   }
   return response;

},function (error) {
    return Promise.reject(error);
  })

  export default axiosInstanceUser