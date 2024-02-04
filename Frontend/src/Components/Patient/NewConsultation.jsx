import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useFormik } from 'formik'
import axiosInstanceUser from '../../Services/AxiosInstance/User/AxiosUser';

function NewConsultation() {



  const [User, SetUser] = useState("User")
  const dispatch = useDispatch()


  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      Name: '',
      Department: '',
      Doctor: '',
      Date: ''
    },
    onSubmit: values => {
      console.log("Form values:", values)
      axiosInstanceUser.post('/createConsultation',values).then(()=>{


      })
    
    },
  });
  return (
    <>


      <div className='w-full flex justify-center pt-5'  >
        <div className='w-3/4 h-[300px]  bg-opacity-10 flex flex-col items-center justify-center pt-5 pb-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  '  >

          <form onSubmit={formik.handleSubmit}>
            <div className='text-left text-xl w-full text-black text-opacity-80  font-medium' >Book New Consultation</div>
            <div className='flex mt-5'>
              <div className='flex flex-col items-start'>
                <label className='' htmlFor="Name">Name</label>

                <input
                  className='px-3 w-[300px] h-8  border-[1px] rounded-md'
                  id="Name"
                  name="Name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.Name}
                />
              </div>
              <div className='flex flex-col items-start'>
                <label className='ml-5 mr-3' htmlFor="Department">Department</label>

                <input
                  className='px-3 ml-4 w-[300px] h-8  border-[1px] rounded-md'
                  id="Department"
                  name="Department"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.Department}
                />
              </div>
            </div>


            <div className='flex  mt-5'>

              <div className='flex flex-col items-start'>

                <label className='mr-3' htmlFor="Doctor">Doctor</label>
                <input
                  className='px-3 w-[300px] h-8  border-[1px] rounded-md'
                  id="Doctor"
                  name="Doctor"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.Doctor}
                />
              </div>

              <div className='flex flex-col items-start'>
                <label className='ml-5 mr-3' htmlFor="Date">Date</label>

                <input
                  className='px-3 ml-4 w-[300px] h-8 border-[1px] rounded-md'
                  id="Date"
                  name="Date"
                  type="date" // Use type="date" for date input
                  onChange={formik.handleChange}
                  value={formik.values.Date}
                />
              </div>

            </div>
            <div className='w-full h-[50px] '>
            <button className=' mt-5 h-[35px] rounded-md w-auto px-4 text-white font-medium hover:bg-lightgreen2 hover:transition-all hover:duration-300 hover:px-5 hover:h-[39px]  bg-lightgreen' type="submit">Book Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewConsultation 