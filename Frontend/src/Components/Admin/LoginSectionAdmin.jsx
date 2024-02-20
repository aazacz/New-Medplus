import React, { useState, useEffect } from 'react'
import group8img from "../../assets/Admin/group8.png"
import LoginPhoto from "../../assets/Admin/photoLoginSession.png"
import logo from "../../assets/MED+Logo.png"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAdmin } from '../../App/Redux/Slice/adminSlice'
// import { useSignIn } from 'react-auth-kit'

function LoginSectionAdmin() {


  const [LoginDetail, SetLoginDetail] = useState({ email: "", password: "" });
  const dispatch = useDispatch()
  const navigate = useNavigate()





  const HandleSubmit = (event) => {
    event.preventDefault()
    console.log("LoginDetails are " + LoginDetail)

    axios.post("http://localhost:6002/admin/login", LoginDetail)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.token);

        if (res.data.token) {

          console.log("signIn function executed");
        }

        return res;
      })
      .then((res) => {
        // Check if the token exists in the response
        if (res && res.data && res.data.token) {
          dispatch(
            loginAdmin({
              name: res.data.name,
              email: res.data.email,
              login: true,
              token: res.data.token
            })
          );
          navigate("/adminDashboard")
        }
      })
      .catch(err => console.log(err));


  }




  return (
    <section className="h-auto md:py-[60px] mx-5  flex items-center justify-center 
                            md:mx-12
                            xl:mx-[150px]">

      <div className=' h-[445px] bg-red-400 rounded-md  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]
                            md:flex md:w-[430px] 
                            lg:flex'>
        <div className=' h-[430px]   bg-white
                            md:flex md:w-full  md:py-2
                            lg:flex
                            
                            rounded-t-lg
                    '>



          {/* Login Sectin right side */}
          <div className='mx-3 w-full h-full  flex items-center flex-col md:pt-4'>
            
            <div className='w-full text-left md:px-8  mx-auto flex items-center justify-between py-6'>
              {/* <img src={logo} className=' w-[100px] h-[50px] ' alt="" /> */}
              <h1 className=' stroke font-bold font-Oswald text-3xl text-midnight'>Admin Login</h1>
            </div>
            

            <form className=' md:w-full h-3/4    flex flex-col  items-center 
                                        md:px-7' action="" onSubmit={HandleSubmit}>


<input  className='mt-6 md:my-0 w-[330px] h-[50px] border-b-[1px]  input-style'
  placeholder='Email'
  type="email"
  onChange={(e) => { SetLoginDetail({ ...LoginDetail, email: e.target.value }); }}
/>
              <input className=' my-6 md:mt-5 w-[330px] h-[50px] border-b-[1px] focus:outline-none' placeholder='Password' type="password" onChange={(e) => { SetLoginDetail({ ...LoginDetail, password: e.target.value }); }} />

              <span className='md:mt-[-10px] text-sm' href="http://">Or Login with OTP</span>


              <div className='w-full h-[40px] flex flex-row items-center justify-between
                                            md:flex  md:h-[50px] md:w-full md:items-center md:justify-between'>





              </div>

              <div className='mt-1 flex h-[50px] w-full  flex-row items-center justify-between
                                  md:flex md:flex-row md:h-[50px] md:w-full  md:items-center md:justify-center'>
                <div className='flex  '>
                  <input type="checkbox" name="" id="" />
                  <p className='ml-1'>Remenber Me</p>
                </div>

                <a className='block ml-5 text-[14px]' href="http://">forgotten Password</a>

              </div>
              <div className='flex h-[50px] w-full mt-6 items-center justify-center '>

                <button className='rounded-[4px] text-white w-[120px] bg-red-600 h-8' type="submit"  > LOGIN</button>



              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

export default LoginSectionAdmin