import React from 'react'
import {  Outlet } from 'react-router-dom';
import NavbarUser from '../Components/Patient/NavbarUser';


function AdminLogin() {

const list = []

// bg-gradient-to-r from-red-200 to-yellow-200 h-screen
  return (
    <>
     <div className='relative bg-gradient-to-r from-red-400 via-gray-300 to-blue-500 h-screen flex flex-col flex-grow'>
     <div className='absolute top-4'>
      <NavbarUser list={list} />
    </div>  
    <div className='w-full h-full flex justify-center items-center'>

      <Outlet />
    </div>
    </div>
    </>
    
       
  )

}

export default AdminLogin