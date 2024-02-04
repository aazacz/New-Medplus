'use client';
import React, { useRef, useState } from 'react';
import { Sidebar } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import MEDLogo from "../../assets/MED+Logo_White.png"
import CropModal from './ImageCropper/CropModal';
import PencilIcon from "./PencilIcon"
import axios from 'axios';
import { HiArrowSmLeft } from 'react-icons/hi';
import Cookies from 'js-cookie';

const SidebarLeft = ({ SidebarList }) => {

  const navigate = useNavigate()
  const [ModalOpen, setModalOpen] = useState(false)

 {/* ######################## Logout Function ########################*/}
  const HandleLogout = ()=>{
    Cookies.remove("UserjwtCookie")
    console.log("cookie Removed");
    // window.location.href = '/login';
    navigate("/login", { replace: true })
  }
  
 

  const avatarUrl = useRef("/DefaultImage.png");

 {/* ######################## Avatar Update ########################*/}
  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc
    console.log(imgSrc);
  }


 {/* ######################## Crop Image Modal ########################*/}
  const handleModalClose = async (imgData) => {

    await axios.post("http://localhost:6002/updateProfileImage", { imgData: imgData }, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(data => {
        if (data.data.status) {
          setModalOpen(false);
        }
      }) .catch(error => console.log(error));

  };



  return (
    <>
      <div className='w-full  flex flex-col items-center pt-5 '>

        <div className='w-[100px] '>
          <img src={MEDLogo} alt="" />
        </div>


        {/* ########################
         Image Cropper Starts Here
        ########################*/}
        <div className='z-10 w-[150px] h-[150px]   border-2-white  rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]' >

          <div className="relative">
            <img
              src={avatarUrl.current}
              alt=""
              className="w-[150px] h-[150px] rounded-full  "
              loading="lazy"
            />
            <button className="absolute  left-1/2 -translate-x-1/2 -bottom-3 m-auto w-fit p-[.35rem] rounded-full bg-bubble-gum hover:bg-gray-700 border border-gray-600"
              title="Change photo"
              onClick={() => setModalOpen(true)}
            >
              <PencilIcon className="" />
            </button>
          </div>
        </div>
        {/* ########################
         Image Cropper Ends Here
        ########################*/}


        {ModalOpen && <CropModal updateAvatar={updateAvatar} closeModal={handleModalClose} />}
      </div>


      <div className=' bg-transparent mt-5' >
        <div className=' bg-transparent'>

          <div className=' flex flex-col items justify-evenly text-left gap-5  '>

            {/* ########################
         Sidebar Menu listing
        ########################*/}
            {SidebarList.map((value, key) => {
              const IconComponent = value.icon
              return (
                <div key={key} href="#" className="cursor-pointer px-6 py-3 text-lg text-white hover:bg-blue-700    "  > <span className='flex items-center gap-3'> <span className="text-[23px]"> <IconComponent /> </span> <Link to={value.link}> {value.name} </Link> </span>   </div>

              )
            })}
            {/* Logout Button */}
            <div href="#" className="px-6 py-3 text-lg text-white hover:bg-blue-700 cursor-pointer   "  
            onClick={() => HandleLogout()}> 
            <span className='flex items-center gap-5'> <span className="text-[23px]"> <HiArrowSmLeft /> </span>  Logout  </span>   </div>
          
          </div>

        </div>
      </div>
    </>
  );
}
export default SidebarLeft