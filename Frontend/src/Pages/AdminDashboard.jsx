import React, { useState, useEffect,useRef } from 'react'
import { FaAngleDown,FaUser  } from "react-icons/fa";
import { Outlet } from 'react-router-dom'
import SidebarLeft from '../Components/Common/SidebarLeft'
import DashboardDropDown from '../Components/Admin/DashboardDropDown';
import { SidebarList } from '../Components/Admin/SidebarList'

function AdminDashboard() {

const [open,setopen]=useState(false)
  const imageError = (e) => {
    e.target.src = "/default.jpg"
  }

let menuRef = useRef()

  useEffect(() => {
   const dropdowncloser =(e)=>{
   if(!menuRef.current.contains(e.target)){
    console.log(menuRef.current);
    setopen(false)
   }
   }
  document.addEventListener('mousedown',dropdowncloser)
    return () => {
      document.removeEventListener('mousedown',dropdowncloser)
   }
  }, [])
  

  return (
    <>
      <div className='h-screen w-full flex flex-col bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 '>

        <section className='flex flex-grow '>
          {/* Sidebar */}
          <div className=' rounded-2xl w-[260px] flex-shrink-0 '>
            <SidebarLeft SidebarList={SidebarList} bg={"lightgreen"} />
          </div>
          {/* Content */}
          <div className='w-full flex flex-col  '>

            <div className=' relative w-full h-[50px] flex items-center justify-end px-12'>



              <img src="" onError={imageError} className='w-[35px] h-[35px] rounded-full ' alt="" />

              <div className='w-[200px] md:pl-2 flex items-center'>
                <div className=' text-black fontt-bold flex ' 
                      onClick={()=>setopen(!open)}>
                  <button className='text-white font-medium cursor-pointer' >Admin </button>
                </div>
                <FaAngleDown className='pl-2 text-white text-lg font-extralight' />
              </div>
              <DashboardDropDown open={open} innerRef={menuRef}/>




            </div>

            <div className='w-full bg-white rounded-s-3xl h-full'>

              <Outlet />
            </div>
          </div>
        </section>

      </div>


    </>
  )
}


export default AdminDashboard



