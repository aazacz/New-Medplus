import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom'; // Import useLocation
import { BiMenu } from "react-icons/bi";
import LogoutIcon from '@mui/icons-material/Logout';


function DoctorDashboardNavbar(props) {
    const { sidebarData, bg } = props



    const location = useLocation(); // Get the current location using useLocation()
    const [hideitem, setHideItem] = useState(false);
    const menuClass = hideitem ? 'hidden' : '';
    const [toggle, settoggle] = useState(true)

    // const signOut = useSignOut()
    useEffect(() => {
        console.log(toggle);
    }, [toggle])


    return (

        <>
           
            <div className={`relative  md:mt-[-90px] md:w-full md:h-[40px] md:items-center bg-sky-600  ${!toggle ? "w-[50px]" : "w-[250px]"}   flex justify-end md:pr-5 transition-all ease-in duration-150`}>
              
                <ul className='   md:h-[35px] md:flex md:gap-3 backdrop-blur-sm '>

                    {toggle ? <BiMenu className={` ml-3 text-2xl h-[30px] rotate-90 md:hidden block`} id='menu' onClick={event => settoggle(!toggle)} /> : <BiMenu className={` ml-3  text-2xl h-[30px] md:hidden block`} id='menu' onClick={event => settoggle(!toggle)} />}

                    {sidebarData.map((val, key) => (
                        <Link to={`${val.link}`} key={key}>
                            <li className={` my-4 w-full  h-[60px] md:h-[35px] md:my-0`} >

                                <div className={` h-full flex flex-row items-center md:w-max  md:px-3  md:rounded-none         
                                    ${location.pathname === val.link ? '  active' : ''}
                                    ${!toggle ? "w-full rounded-full" : "w-[250px] rounded-l-full"}`}>

                                    <div className={`${location.pathname === val.link ? 'text-black rounded-l-full active:md:text-slate-950' : 'text-black'} ml-3 md:ml-0 md:hidden `}>{val.icon}</div>
                                    <div data-appear="hidemenu" className={`md:text-lg hover:md:text-base ${menuClass} ${location.pathname === val.link ? 'text-black rounded-l-full active' : 'text-white'} md:ml-0 ml-[10px] text-sm `}>{toggle ? val.title : ""}</div>

                                </div>

                            </li>
                        </Link>


                    ))}
                    <li className={` md:my-0 md:h-full md:w-max my-4 w-full   h-[60px] `} >

                        <div className={`w-full h-full flex flex-row items-center  `}>

                            <div className={`${menuClass} ml-[10px] text-sm cursor-pointer md:text-black `}><LogoutIcon /></div>
                            <div data-appear="hidemenu" className={`${menuClass} text-black  ml-[10px] text-sm cursor-pointer `}>{toggle ? "Logout" : ""}</div>

                        </div>

                    </li>

                </ul>
            </div>




        </>
    );
}

export default DoctorDashboardNavbar;
