import React from 'react'
import med from "/med.png"
import plus from "/plus.png"

const LoaderScreen = () => {
    return (
        <div className='absolute bg-black bg-opacity-25 backdrop-blur-sm w-full h-full flex justify-center items-center'>

            <div className='flex justify-center items-center'>

                <div className='w-[200px] '>        <img src={med} alt="" />           </div >

                <div className='pl-2 w-[50px] animate-pulsing '>         <img src={plus} alt="" />          </div >
            </div>

        </div>
    )
}

export default LoaderScreen