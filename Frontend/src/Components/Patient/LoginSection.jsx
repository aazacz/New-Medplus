import React, { useState, useEffect } from 'react'
import group8img from "../../assets/User/group8.png"
import LoginPhoto from "../../assets/User/photoLoginSession.png"
import logo from "../../assets/MED+Logo.png"
import axiosInstance from "../../Services/AxiosInstance/User/AxiosUser"
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../App/Redux/Slice/userSlice"
import Cookies from 'js-cookie';

function LoginSectionUser() {

 
    const [LoginDetail, SetLoginDetail] = useState({ email: "", password: "" });
    const [email,Setemail] = useState({email:""}) 
    const dispatch = useDispatch()
    const navigate = useNavigate()





    const otpgenerate = (event)=>{
        event.preventDefault()
        axiosInstance.post("generateotp", email)
        .then((res) => {
            dispatch(
                loginUser({
                email:email,
                otp:res.data.OTP
                })
              );
            navigate(`verifyotp`, { OTP: res.data.OTP });
        }).catch((error)=>{
            console.log(error);
        })
    }



    const HandleSubmit = (event) => {
        event.preventDefault()
        console.log("LoginDetails are " + LoginDetail)

       axiosInstance.post("/login", LoginDetail)
        .then((res) => {
         
      
          if (res.data.token) {
              const jwtToken = res.data.token 
              Cookies.set('UserjwtCookie', jwtToken, { expires: 7 })        
                              }
        return res; 
        })
        .then((res) => {
          // Check if the token exists in the response
          if (res && res.data && res.data.token) {
            dispatch(
              loginUser({
                name: res.data.name,
                email: res.data.email,
                login: true,
                token: res.data.token
              })
            );
            navigate("/UserDashboard")
          }
        })
        .catch(err => console.log(err));
      

    }




    return (
        <section className="h-auto md:py-[60px] mx-5  flex items-center justify-center 
                            md:mx-12
                            xl:mx-[150px] ">

            <div className=' h-[445px] bg-lightgreen2 rounded-md  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
                            md:flex md:w-[800px] 
                            lg:flex'>
                <div className=' h-[430px] rounded-md   bg-white
                            md:flex md:w-[800px] 
                            lg:flex
                    '>
                    {/* Login Sectin Left side */}
                    <div className='w-full h-full hidden
                                md:w-1/2 display-block md:px-7 md:py-9 md:flex  md:flex-col  md:items-center 
                                lg:w-1/2 lg:px-7 lg:py-9 lg:flex  lg:flex-col  lg:items-center' >
                        <img src={group8img} alt="" />
                        <img className='w-[250px]' src={LoginPhoto} alt="" />
                    </div>

                    {/* Login Sectin right side */}
                    <div className='mx-3 w-full h-full  flex items-center
                                    md:w-1/2 
                                    lg:w-1/2 '>
                        <form className=' md:w-full h-3/4   md:border-l-[1px] flex flex-col  items-center 
                                        md:px-7' action="" onSubmit={HandleSubmit}>

                            <img src={logo} className=' w-[70px] h-[30px] ' alt="" />
                            <h1 className='text-[17px] mt-[18px]'>Welcome user! please Login to your Account</h1>

                            <input className=' mt-6 md:my-0 w-[330px] h-[50px] border-b-[1px] rounded-lg focus:outline-none' placeholder='Email' type="email" onChange={(e) => { SetLoginDetail({ ...LoginDetail, email: e.target.value }); }} />
                            <input className=' my-6 md:mt-5 w-[330px] h-[50px] border-b-[1px] rounded-lg focus:outline-none' placeholder='Password' type="password" onChange={(e) => { SetLoginDetail({ ...LoginDetail, password: e.target.value }); }} />

                            <span className='md:mt-[-10px] text-sm' href="http://">Or Login with OTP</span>


                            <div className='w-full h-[40px] flex flex-row items-center justify-between
                                            md:flex  md:h-[50px] md:w-full md:items-center md:justify-between'>

                                <input onChange={e => Setemail({...email, email: e.target.value })} className='my-3 md:w-[150px] h-[30px] border-b-[1px] focus:outline-none ' placeholder='email' type="text" />

                           
                                    <button onClick={otpgenerate} className=' rounded-md text-white w-[110px] bg-lightgreen2 h-7'  > Send OTP</button>
                            

                            </div>

                            <div className='mt-1 flex h-[50px] w-full  flex-row items-center justify-between
                                  md:flex md:flex-row md:h-[50px] md:w-full  md:items-center md:justify-between'>
                                <div className='flex '>
                                    <input type="checkbox" name="" id="" />
                                    <p className='ml-1'>Remenber Me</p>
                                </div>

                                <a className='block text-[14px]' href="http://">forgotten Password</a>

                            </div>
                            <div className='flex h-[50px] w-full mt-6 items-center justify-center '>

                                <button className='rounded-[4px] text-white w-[120px] bg-lightgreen2 h-8' type="submit"  > LOGIN</button>
                                
                                <button className='rounded-[4px] ml-4 text-lightgreen w-[120px] border-2 border-lightgreen h-8' onClick={()=>navigate("/signup")} > SIGNUP</button>
                               
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default LoginSectionUser