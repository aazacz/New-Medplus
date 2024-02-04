import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import NavbarUser from '../Components/Patient/NavbarUser';
// import { UserAuthCheck } from "../Services/authentication"



function UserLogin() {


const list = []
// bg-gradient-to-r from-violet-200 to-pink-200
// bg-gradient-to-r from-blue-800 to-indigo-900
  return (
    <>
    <div className='bg-gradient-to-r from-rose-100 to-teal-100 h-screen'>

      <div className='relative z-50 top-4'>

        <NavbarUser list={list} />
      </div>

      <Outlet />
    </div>

    </>
  )



}

export default UserLogin