import React, { useState, useEffect } from 'react'
import logo from "../../assets/MED+Logo.png"
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { BiMenu } from "react-icons/bi";
import LogoutIcon from '@mui/icons-material/Logout';
import AppsIcon from '@mui/icons-material/Apps';
import BiotechIcon from '@mui/icons-material/Biotech';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonPinIcon from '@mui/icons-material/PersonPin';
const Dashboard_Navbar_Doctor = (props) => {

    const { bg } = props
    const location = useLocation(); // Get the current location using useLocation()
    const [hideitem, setHideItem] = useState(false);
    const menuClass = hideitem ? 'hidden' : '';
    const [toggle, settoggle] = useState(true)

    const sidebarData = [

        {
            title: "Overview",
            icon: <AppsIcon />,
            link: "/doctordashboard",
            first: true
        },
        {
            title: "Lab Result",
            icon: <BiotechIcon />,
            link: "/doctordashboard/labresult"
        },
        {
            title: "Consultations",
            icon: <AssignmentIcon />,
            link: "/doctordashboard/consultation"
        },

        {
            title: "Profile",
            icon: <PersonPinIcon />,
            link: "/doctordashboard/Profile"
        },



    ]
    // const signOut = useSignOut()
    useEffect(() => {
        console.log(toggle);
    }, [toggle])


    return (
        <>

            <div className='md:h-[100px]   w-full  flex justify-between overflow-hidden '>

                <nav className=' w-full   md:bg-transparent flex justify-between   overflow-hidden md:flex md:items-center md:justify-center  md:w-full    '>

                    <div className='md:absolute md:left-2   md:flex md:flex-col flex flex-col  md:w-auto md:ml-5 z-20'>
                        <div className='text-left'>
                            <img className=" w-[68px] md:h-[60px] md:w-auto md:z-50  " src={logo} alt="LOGO" />
                        </div >
                        <span className=' text-[9px]  font-sans z-40   md:text-black lg:text-black flex md:text-base '>Where Healing matters...</span>
                    </div>


                    <div className={` md:w-full md:h-[40px] md:items-center  ${!toggle ? "w-[50px]" : "w-[250px]"}  flex justify-end  transition-all ease-in duration-150`}>

                        <ul className='  md:w-1/2 md:h-[35px] md:flex md:gap-3 bg-gradient-to-r from-transparent via-emerald-500 to-purple-900 z-40 md:pl-24  md:px-5'>

                            {toggle ? <BiMenu className={` ml-3 text-2xl h-[30px] rotate-90 md:hidden block`} id='menu' onClick={event => settoggle(!toggle)} /> : <BiMenu className={` ml-3  text-2xl h-[30px] md:hidden block`} id='menu' onClick={event => settoggle(!toggle)} />}

                            {sidebarData.map((val, key) => (
                                <Link to={`${val.link}`} key={key}>
                                    <li className={` my-4 w-auto  h-[60px] md:h-[35px] md:my-0  `} >

                                        <div className={` h-full flex flex-row items-center md:w-max  md:px-3  md:rounded-none         
                               ${location.pathname === val.link ? 'active' : ''}
                               ${!toggle ? "w-full rounded-full" : "w-[250px] rounded-l-full"}`}>

                                            <div className={`${location.pathname === val.link ? 'text-black rounded-l-full active:md:text-slate-950' : 'text-black'} ml-3 md:ml-0 md:hidden `}>{val.icon}</div>
                                            <div data-appear="hidemenu" className={`md:text-lg font-semibold hover:md:text-xl ${menuClass} ${location.pathname === val.link ? 'text-amber-300 rounded-l-full active' : 'text-white'} md:ml-0 ml-[10px] text-sm `}>{toggle ? val.title : ""}</div>

                                        </div>

                                    </li>
                                </Link>


                            ))}

                            <li className={` md:my-0 md:h-full md:w-max my-4 w-full   h-[60px] `} >

                                <div className={`w-full h-full flex flex-row items-center  `}>

                                    <div className={`${menuClass} ml-[10px] text-sm cursor-pointer md:text-white `}><LogoutIcon /></div>
                                    <div data-appear="hidemenu" className={`${menuClass} text-white  ml-[10px] text-sm cursor-pointer `}>{toggle ? "Logout" : ""}</div>

                                </div>

                            </li>

                        </ul>
                    </div>


                </nav>

            </div>









        </>

    )
}

export default Dashboard_Navbar_Doctor