import React, { useState } from 'react'
import logo from "../../assets/MED+Logo.png"
import { Link, useNavigate } from 'react-router-dom';
import '../../index.css'
import { SiOpenlayers } from 'react-icons/si'


const NavbarUser = ({list}) => {
    const [open, setOpen] = useState(true)
    const navigate = useNavigate()


    return (
        <>
            <header className={`  w-full z-50   mx-auto pr-10    md:backdrop-blur-sm  md:flex justify-between`} >

                <div className='text-left h-full w-[400px]  clip-path-polygon pl-11 '>
                    <img className=" w-[68px] md:h-[60px] md:w-auto  " src={logo} alt="LOGO" />
                </div >

                <div className={`flex z-50  justify-between  py-2  md:w-1/2 font-Oswald text-[30px] font-medium text-white `}
                >
                    <span className={`transition-all duration-400 hover:font-Oswald hover:text-[30px] hover:font-medium hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-bl from-gray-300 via-fuchsia-600 to-orange-600`}
                    >

                    </span>

                    <button className={`block z-50 ${open ? 'rotate-180 ' : 'rotate-0 text-cyan-500 '} transition-all duration-200 md:hidden 
                              text-white`}
                        type="button"
                        onClick={() => setOpen(!open)}
                    >
                        {' '}
                        <SiOpenlayers />{' '}
                    </button>
                </div>

                <div className={`md:flex-row md:w-1/2 my-auto z-40  `}>
                    <div className={` w-full    absolute  md:relative  left-0   ${open ? '-translate-y-72 opacity-5   ' : 'opacity-100 '} 
          md:block md:translate-y-0 md:opacity-100 transition-opacity-200  transition-all duration-700 text-white text-center backdrop-blur-sm md:backdrop-blur-0 `}
                    >
                        <ul className="    md:flex md:justify-end md:space-x-11  ">


                            {list.length>0 && list.map((value, index) => (
                                <li onClick={() => setOpen(!open)}
                                    key={index}
                                    className={` py-2 md:py-0 ${open ? 'text-black ' : 'text-white'
                                        } text-lg`}
                                >
                                    <Link to={value.link}>{value.li.toUpperCase()}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavbarUser