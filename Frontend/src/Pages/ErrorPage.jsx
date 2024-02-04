import React from 'react'
import Img404 from "../assets/Img404.png"
import { Link } from 'react-router-dom'
import logo from "../assets/MED+Logo.png"

const ErrorPage = () => {
    return (

        <div className='flex flex-col items-center justify-center w-full h-screen   '>
              <img className=" w-[68px] md:h-[80px] md:w-auto " src={logo} alt="LOGO" />
           
            <div className='flex flex-col' >

                <div className=' flex flex-row gap-16   px-9 w-screen  h-[400px] bg-slate-100' >


                    <div className='w-1/2 flex flex-col' >
                        <p className='text-[200px] font-medium text-amber-600 '>404</p>
                        <p className='text-[40px] font-semibold mt-[-40px] '>Something Went Wrong</p>

                    </div>
                    <div className='w-1/2' >
                        <img src={Img404} className=' h-full' alt="404 Image" />

                    </div>
                </div>
             
                <div className='mt-[30px]'>
                    <Link to={'/'}>
                        <button className='w-[300px] h-[40px] bg-orange-600 rounded-xl 
                        shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]  text-white  hover:shadow-none hover:text-lg hover:duration-150'> Back To HomePage</button>
                    </Link>
                </div>






            </div>
        </div>

    )
}


export default ErrorPage