import axios from "axios";
import Cookies from "js-cookie"


const apiUrl = import.meta.env.VITE_API_URL
const baseURL = apiUrl

const axiosInstanceDoctor = axios.create()


axiosInstanceDoctor.interceptors.request.use(function (config) {
    console.log("Interceptor request send for doctor side");

    const role = "Doctor";
    const token = Cookies.get(`DoctorjwtCookie`);
    console.log("cookieValue is " + token);

    if (token) {
        config.headers.Authorization = `${token}`;
    }

    config.baseURL = baseURL


    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});



// Add a response interceptor
axiosInstanceDoctor.interceptors.response.use(function (response) {
    console.log("response received" + response.data.message);

    if (response.data.message === "TimedOut") {

        Cookies.remove('DoctorjwtCookie')
    }
    return response;

}, function (error) {

    return Promise.reject(error);
});





export default axiosInstanceDoctor