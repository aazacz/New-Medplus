import React from 'react'

const ConsultationCounter = () => {
  return (
    <div className='flex gap-3'>

<div className='w-[140px] h-[140px] border-[1px] border-midnight bg-white rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex justify-center items-center'> 

<div className='w-[90%] h-[90%] bg-blue-400 rounded-2xl' >
  <div className='w-full h-1/2  border-b-2 font-bold  text-wrap flex items-center'>Number of  Consultations</div>
  <div className='w-full h-1/2  text-5xl font-extrabold shad text-wrap flex items-center justify-center '>1</div>
   </div>

</div>

<div className='w-[140px] h-[140px] border-[1px] border-midnight bg-white rounded-2xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex justify-center items-center'> 

<div className='w-[90%] h-[90%] bg-lime-500 rounded-2xl' >
  <div className='w-full h-1/2  border-b-2 font-bold  text-wrap flex items-center'>Patients  Consultated</div>
  <div className='w-full h-1/2  text-5xl font-extrabold  text-wrap flex items-center justify-center'>1</div>

   </div>

</div>
          </div>
  )
}

export default ConsultationCounter