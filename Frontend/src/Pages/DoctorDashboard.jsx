import React, { useLayoutEffect } from 'react'
// import Dashboard_Navbar_Doctor from '../components/Doctor/Dashboard_Navbar_Doctor'
// import sidebarData from '../components/Doctor/sidebarData'
// import DoctorDashboardNavbar from '../components/Doctor Dashboard Navbar/DoctorDashboardNavbar'
import { Outlet } from 'react-router-dom';
import Dashboard_Navbar_Doctor from '../Components/Doctor/Dashboard_Navbar_Doctor';
function DoctorDashboard() {

  return (
    <>

      <div className="h-screen w-full flex flex-col ">


        <div className=" h-[90px] items-center overflow-hidden pt-4 md:pt-0  ">
          <Dashboard_Navbar_Doctor />
        </div>

        <div className='flex-1 bg-gradient-to-r from-gray-100 to-gray-300 '>

          <Outlet />
        </div>


      </div>
    </>
  )
}
{/* <DoctorDashboardNavbar sidebarData={sidebarData}  />      */ }

export default DoctorDashboard



