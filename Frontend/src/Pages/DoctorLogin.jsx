import React, { useEffect, useState,useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavbarUser from '../Components/Patient/NavbarUser';



const list = []

function DoctorLogin() {


  return (
    <>
    <div className='relative bg-gradient-to-r from-red-200 to-yellow-200 h-screen flex flex-col flex-grow'>
      <div className='absolute top-4'>
      <NavbarUser list={list} />
    </div>  
    <div className='w-full h-full flex justify-center items-center'>

      <Outlet />
    </div>
    </div>
    </>
  );
}

export default DoctorLogin;
