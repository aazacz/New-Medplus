import React from 'react'
import logo from "../../assets/MED+Logo.png"
import { CiFacebook, CiInstagram ,CiTwitter} from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div className="w-full h-[270px] mt-[40px] bg-sky-900 py-3 flex flex-row">
                <div className="flex flex-col w-1/4 h-ful pl-6">
                    <img className=" mt-4  w-[48px] md:w-[80px]" src={logo} alt="LOGO" />
                    <h5 className='mt-4 text-white text-left text-base font-semibold'>Get A Lots of informations from us </h5>
                    <h5 className='mt-4 text-white text-left text-2xl font-semibold'>Subscribe to our NewsLetter </h5>

                    <input className='mt-4 outline-none px-5 rounded-md h-12 caret placeholder:italic  placeholder:text-sm ' type="email" name="email" placeholder='Enter Your Email ' />
                    <button className='mt-4 w-[312px] h-[40px] rounded-md  bg-white hover:bg-slate-300' type="submit"> Submit</button>
                </div>
                <div className="w-1/2 h-full bg-red-500"></div>
                <div className="w-1/4 h-full">

                    <div className='w-full h-full  flex flex-col justify-between items-start pt-5 pr-[100px] '>
                      
                        <div className='flex flex-col items-start'>
                            <a className='text-white font-bold font-sans text-lg' href="/login">Who Are You ?. </a>
                            <a className='text-white' href="/login">User </a>
                            <a className='text-white' href="/Doctor">Doctor </a>
                            <a className='text-white' href="/Admin">Admin </a>
                        </div>

                        <div className='w-fuil flex gap-2'>
                            <CiFacebook className='w-[30px] h-[30px] text-white' />
                            <CiInstagram className='w-[30px] h-[30px] text-white' />
                            <BsWhatsapp className='w-[23px] mt-1 h-[23px] text-white' />
                            <CiTwitter  className='w-[30px] h-[30px] text-white' />
                        </div>

                    </div>
                </div>
            </div>
 

        </>
    )
}

export default Footer