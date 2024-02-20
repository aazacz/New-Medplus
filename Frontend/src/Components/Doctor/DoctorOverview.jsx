import React, { useRef, useState } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import CropModal from '../Common/ImageCropper/CropModal';
import axios from "axios";
import PencilIcon from '../Common/PencilIcon';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import ConsultationCounter from './ConsultationCounter';
import Notification from './Notification';

function DoctorOverview() {

  // Accessing state from Redux store using useSelector hook
  const user = useSelector((state) => state.doctor);

  const [ModalOpen, setModalOpen] = useState(false)

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc
    console.log(imgSrc);
  }

  //if no image is loaded
  const handleimageError = (e) => {
    e.target.src = "/default.jpg";
  }

  const handleModalClose = async (imgData) => {

    const token = Cookies.get("DoctorjwtCookie")
    console.log("token" + token)
    await axios.post("http://localhost:6002/doctor/saveimage", { imgData: imgData }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': token
      },
    }).then(data => {
      if (data.data.status) {
        setModalOpen(false);
      }
    }).catch(error => console.log(error));
  };

  return (
    <>
      <div className=' h-full md:mt-[-230px] -z-10'>


        <div style={{ background: "url(doctordash.jpg)", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className=' w-full h-[300px]   flex items-center justify-center'>
          {/* Parent div */}
        </div>

        <div className='  flex items-center px-9  '>

          <div className='z-20 absolute w-[150px] h-[150px]   border-2-white  rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]' >


            <div className="relative ">
              <img
                src={user.Picture}
                alt=""
                onError={handleimageError}
                className="w-[150px] h-[150px] rounded-full  "
                loading="lazy"
              />
              <button className="absolute -bottom-3  left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-white hover:bg-gray-700 border border-gray-600"
                title="Change photo"
                onClick={() => setModalOpen(true)}
              >
                <PencilIcon className="" />
              </button>
            </div>

          </div>

          {ModalOpen && <CropModal updateAvatar={updateAvatar} closeModal={handleModalClose} />}


          <div className='w-full pl-11' >

            <div className='   w-full flex items-end justify-end'>

              <span className='text-[25px] text-black font-bold'>Welcome {user && user.name && user.name.length !== 0 ? user.name : "User"} to your Profile</span>

            </div>

            <div className='    rounded-xl my-0 h-[100px] bg-white  flex flex-col justify-center  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>

              <div className='flex h-1/2 opacity-100 z-10 text-gray-950 border-b-2'>
                <div className='w-1/2  flex items-center justify-center  border-r-2 ' ><h1>Name</h1> </div>
                <div className='w-1/2 flex items-center justify-center' ><h1>Department </h1> </div>
              </div>
              <div className='flex h-1/2'>
                <div className='w-1/2  flex items-center justify-center' ><h1 className='text-lg font-medium'>Dr Abhilash abin</h1> </div>
                <div className='w-1/2 flex items-center justify-center' ><h1 className='text-lg font-medium'>Psycology </h1> </div>
              </div>

            </div>
          </div>
        </div>

        <div className=' m-9 flex gap-9 '>
          <ConsultationCounter />
          <Notification />
        </div>

      </div>




    </>
  )
}

export default DoctorOverview 