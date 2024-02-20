import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import group8img from "../../assets/User/group8.png"
import LoginPhoto from "../../assets/User/photoLoginSession.png"
import logo from "../../assets/MED+Logo.png"
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useSignIn } from 'react-auth-kit'
import axios from "axios"
import { loginUser } from "../../App/Redux/Slice/userSlice"

function LoginSectionOtpVerify() {
    const [otp,Setotp] = useState('')
    const signIn = useSignIn()
    const [LoginDetail, SetLoginDetail] = useState({ email: "", otp: "" });
    const user = useSelector(state=>state.login)
    console.log(user.otp);
    const dispatch = useDispatch() 
    const location = useLocation();
    const { OTP } = location.state || {};
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(OTP);
        console.log(location.pathname);
        console.log("location.state");
        console.log(location.state);
        console.log(user.otp);
        const Email = user.email.email
        console.log(user.email.email);
        SetLoginDetail({email:Email,otp:user.otp})
    },[])
   
    const apiUrl = import.meta.env.VITE_API_URL
    const verifyOTP =(event)=>{
        event.preventDefault()
        if(user.otp===otp){
         
            axios.post(`${apiUrl}/otplogin`,LoginDetail)
            .then((res)=> {
                console.log("response.data.token");
                console.log(res.data.token);

                if (res.data.token) {
                    signIn({
                      token: res.data.token,
                      expiresIn: 3600,
                      tokenType: "Bearer",
                      authState: {email:LoginDetail.email }
                    });
                    console.log("signIn function executed");

                
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
                  
            }).catch((error)=>{
                console.log(error);
                console.log(error.message);
            })
            
        }
    }




    return (

        

        <section className="h-auto md:py-[60px] mx-5  flex items-center justify-center 
        md:mx-12
        xl:mx-[150px]">

<div className=' h-[445px] bg-lightgreen2 rounded-md  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
        md:flex md:w-[800px] 
        lg:flex'>
<div className=' h-[430px]   bg-white
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

    <div className=' md:w-full h-3/4   md:border-l-[1px] flex flex-col  items-center 
                    md:px-7' >
        <img src={logo} className=' w-[70px] h-[30px] ' alt="" />
        <h1 className='text-[17px] mt-[18px]'>Welcome user! please Login to your Account</h1>

        {/* <input disabled className='cursor-not-allowed  mt-6 md:my-0 w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Username' type="text" />
        <input disabled className='cursor-not-allowed my-6 md:mt-5 w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Password' type="text" /> */}

    


        <div className='w-full h-[40px] flex flex-row items-center justify-between
                        md:flex  md:h-[50px] md:w-full md:items-center md:justify-between'>

            <input onChange={(e)=>{Setotp(e.target.value)}} className='my-3 md:w-[150px] h-[30px] border-b-[1px] focus:outline-none ' placeholder='Enter OTP' type="text" />

            <button onClick={verifyOTP} className=' rounded-md text-white w-[110px] bg-lightgreen2 h-7' > Verify OTP</button>
        </div>

        <div className='mt-1 flex h-[50px] w-full  flex-row items-center justify-between
                        md:flex md:flex-row md:h-[50px] md:w-full  md:items-center md:justify-between'>
            <div className='flex '>
                <input type="checkbox" name="" id="" />
                <p className='ml-1'>Remenber Me</p>
            </div>

            {/* <a className='block text-[14px]' href="http://">forgotten Password</a> */}

        </div>
        <div className='flex h-[50px] w-full mt-6 items-center justify-center '>

            <button className='rounded-[4px] text-white w-[120px] bg-lightgreen2 h-8' > LOGIN</button>
            <button className='rounded-[4px] ml-4 text-lightgreen w-[120px] border-2 border-lightgreen h-8' > SIGNUP</button>

        </div>

    </div>

</div>

</div>

</div>
</section>

    )
}

export default LoginSectionOtpVerify