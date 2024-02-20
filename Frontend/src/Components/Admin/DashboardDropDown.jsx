import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaAngleDown, FaUser } from "react-icons/fa";
import Cookies from 'js-cookie';
import { Link, useNavigate } from "react-router-dom";
const DashboardDropDown = (props) => {
    
    const { open,innerRef } = props
    const navigate = useNavigate()

    //Logout Function
    const logout =()=>{
        Cookies.remove("AdminjwtCookie")
        navigate("/admin",{replace:true})
    }

    return (
        <div ref={innerRef} className={`w-[200px] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ${open ? `opacity-100` : `opacity-0 -translate-x-6`}  transition-all ease-in-out duration-300 h-auto absolute md:top-9    bg-slate-300  rounded-md`}>
            <div  className='flex items-center gap-3 p-3 cursor-pointer hover:bg-slate-400  text-green-500 group hover:text-green-700'>  <span ><FaUser /></span> <span className='font-semibold '>Profile</span>  </div>
            <div onClick={logout} className='flex items-center gap-3 p-3 cursor-pointer hover:bg-slate-400 text-green-500 hover:text-green-700'>  <span className='text-lg'><RiLogoutBoxLine /></span> <span className='font-semibold'>Logout</span>  </div>

        </div>
    )
}

export default DashboardDropDown