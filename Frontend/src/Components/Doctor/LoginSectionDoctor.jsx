import React, { useState, useEffect } from 'react'
import group8img from "../../assets/Doctor/group8.png"
import LoginPhoto from "../../assets/Doctor/DrGroupClipImage.jpg"
import logo from "../../assets/MED+Logo.png"
import axiosInstanceDoctor from '../../Services/AxiosInstance/Doctor/AxiosDoctor'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginDoctor } from '../../App/Redux/Slice/doctorSlice' 
import toast from 'react-hot-toast';  // for showing small alerts
import Cookies from "js-cookie"

function LoginSectionDoctor() {

    const [LoginDetail, SetLoginDetail] = useState({ email: "", password: "" });
    const dispatch = useDispatch()
    const navigate = useNavigate()





    const HandleSubmit = (event) => {
        event.preventDefault()
        console.log("LoginDetails are " + LoginDetail)
        
        //calling axios
        axiosInstanceDoctor.post("/login", LoginDetail).then((res) => {
           
        console.log(res);
            if(res.data.message === "Email doesnt match"){
                toast.error('Email is incorrect.');
                return
            }else if(res.data.message === "Server error"){
                toast.error('Server error');
                return
            }else if(res.data.message === "Password is incorrect"){
                toast.error('Password is incorrect');
                return
            }else if(res.data.message === "Enter Email And Password"){
                toast.error('Enter Email And Password');
                return
            }
            
            if (res.data.token) {
                console.log("LOGIN function in fontend running");

              const jwtToken = res.data.token
              Cookies.set('DoctorjwtCookie', jwtToken, { expires:7 })
              
              console.log("LOGIN function in fontend runned");
                //after saving the JWT token in Session Storage,Storing the login details in Store
                dispatch(
                    loginDoctor({
                        name: res.data.name,
                        email: res.data.email,
                        login: true,
                        token: res.data.token,
                        Picture: res.data.ProfilePicture
                    })
                )
                navigate("/DoctorDashboard")
            }

        }).catch(err => console.log(err))

    }



    return (
        <section className="h-auto md:py-[60px] mx-5  flex items-center justify-center 
                            md:mx-12
                            xl:mx-[150px]">
     

            <div className=' h-[445px] bg-gradient-to-r from-pink-500 to-violet-600 rounded-md  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                            md:flex md:w-[800px]  
                            lg:flex'>
                <div className=' h-[430px] rounded-md  bg-white
                            md:flex md:w-[800px] 
                            lg:flex
                    '>
                    {/* Login Sectin Left side */}
                    <div className='w-full h-full hidden relative
                                md:w-1/2 display-block md:px-7 md:py-9 md:flex  md:flex-col  md:items-center 
                                lg:w-1/2 lg:px-7 lg:py-9 lg:flex  lg:flex-col  lg:items-center' >
                        <img src={group8img}  alt="" />
                        <img className=' absolute bottom-10 w-[350px]' src={LoginPhoto} alt="" />
                    </div>

                    {/* Login Sectin right side */}
                    <div className='mx-3 w-full h-full  flex items-center
                                    md:w-1/2 
                                    lg:w-1/2 '>
                        <form className=' md:w-full h-3/4   md:border-l-[1px] flex flex-col  items-center 
                                        md:px-7' action="" onSubmit={HandleSubmit}>

                            <img src={logo} className=' w-[70px] h-[30px] ' alt="" />
                            <h1 className='text-[17px] mt-[18px]'><span  className='text-[17px] mt-[18px] font-medium'>Welcome Doctor!</span> please Login to your Account</h1>

                            <input className=' mt-6 md:my-0 w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Email' type="email" onChange={(e) => { SetLoginDetail({ ...LoginDetail, email: e.target.value }); }} />
                            <input className=' my-6 md:mt-5 w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Password' type="password" onChange={(e) => { SetLoginDetail({ ...LoginDetail, password: e.target.value }); }} />

                            <span className='md:mt-[-10px] text-sm' href="http://">Or Login with OTP</span>


                            <div className='w-full h-[40px] flex flex-row items-center justify-between
                                            md:flex  md:h-[50px] md:w-full md:items-center md:justify-between'>

                                <input className='my-3 md:w-[150px] h-[30px] border-b-[1px] focus:outline-none ' placeholder='Mobile' type="text" />

                                <Link to='verifyotp'>
                                    <button className=' rounded-md text-white w-[110px] bg-blue h-7'  > Send OTP</button>
                                </Link>

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

                                <button className='rounded-[4px] text-white w-[120px] bg-blue-600 h-8 up' type="submit"  > LOGIN</button>
                              
                                
                               
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default LoginSectionDoctor