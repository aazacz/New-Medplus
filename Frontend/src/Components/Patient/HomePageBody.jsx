import React from "react";
import logo from "../../assets/HomePageBodySvg/MED+Logo.png"
import Button_photo1 from "../../assets/HomePageBodySvg/card 1.png"
import doctorPng from "../../assets/HomePageBodySvg/doctor.png"
import prescriptionPng from "../../assets/HomePageBodySvg/prescription.png"
import dr1 from "../../assets/HomePageBodySvg/dr1.jpeg"
import dr2 from "../../assets/HomePageBodySvg/dr2.png"
import dr3 from "../../assets/HomePageBodySvg/dr3.png"
import Banner from "../../assets/HomePageBodySvg/banner.webp"
import { DepartmentIcons } from "../Patient/DepartmentIcons" 
import doctorGroupPhoto from '../../assets/HomePageBodySvg/doctorGroupPhoto.jpg'
import {motion } from 'framer-motion'
import homepageimg from '../../assets/HomePageBodySvg/home_page.jpg'

const HomePageBody = React.memo(() => {


    return (
        <>
            <section className=" h-auto    ">

                {/* homepageimage */}   
                <div className="  w-full h-[calc(100vh+80px)]   "> 
                
                <img src={homepageimg} className=" w-full h-screen object-center " alt="" />
                
                    <div className="">
                        < motion.div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col bg-slate-50  p-9 py-  absolute top-32 left-32 rounded-lg md:flex-col   md:justify-between">
                            <div>
                                <div className="flex items-center ">
                                    <span className=" text-[20px] font-[Arial] font-extrabold 
                                            md:text-[35px]">Health Powered by</span>
                                    <img className="  ml-[7px] w-[68px] md:w-[120px]" src={logo} alt="LOGO" />
                                </div>

                                <div className=" flex  item">
                                    <p className="text-left font-[Arial] md:w-[500px] font-normal md:text-xl ">Supporting better health outcomes and clinical excellence with intelligent technology </p>
                                </div>
                            </div>
                           
                            <div className="  ">
                                <div className="   flex justify-center md:flex-none md:justify-start ">
                                    <button className="flex items-center   w-[180px]  h-[30px]  bg-lightPink  text-[9px]  text-lightPinkDark  rounded-md
                                        md:w-[300px] md:h-[50px] md:text-[17px] md:rounded-lg">
                                        <img className="ml-[10px] mr-[5px] h-[20px] md:h-[30px] " src={Button_photo1} alt="" />
                                        Get your Med+ Card Now</button>
                                </div>

                                <div className="  flex justify-center md:flex-none md:justify-start">

                                    <div className="mt-[10px]">
                                        <button className="flex  items-center   w-[85px]  h-[30px]  bg-lightPink  text-[8px]  text-lightPinkDark  text-left rounded-md
                                            md:w-[145px] md:h-[50px] md:text-[14px] md:rounded-lg hover:transition-shadow-black">
                                            <img className="ml-[10px] mr-[5px] h-[20px] md:h-[30px]" src={doctorPng} alt="" />
                                            Book an Appointment</button>
                                    </div>


                                    <div className="mt-[10px] ml-[10px]">
                                        <button className="flex  items-center   w-[85px]  h-[30px]  bg-lightPink  text-[8px]  text-lightPinkDark  text-left rounded-md
                                            md:w-[145px] md:h-[50px] md:text-[14px] md:rounded-lg">
                                            <img className="ml-[10px] mr-[5px] h-[20px] md:h-[30px]" src={prescriptionPng} alt="" />
                                            Check Your Results</button>
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                        <div className="  absolute top-[450px]  md:w-auto left-32   md:flex md:mt-[20px] md:justify-between md:flex-row center  
                                               w-full px-7 py-6  bg-lightgreen3 rounded-2xl">

                            <div className=" w-[300px] z md:w-[600px]   md:flex md:flex-col md:py-7 ">

                                <h1 className="  text-xl  text-left font-[Times-New-Roman] md:font-medium md:text-2xl mb-[10px]
                                         ">Medical Quality is in our DNA</h1>

                                <h4 className="md:text-left text-left text-sm md:text-xl md:leading-[40px]  "> There are no shortcuts to becoming a qualified doctor, and there
                                    are no shortcuts to developing an AI that raises the bar for clinical
                                    accuracy, user accessibility, and industry regulation.</h4>
                            </div>




                            <div className=" flex flex-col">

                                <div className=" flex items-center justify-center">
                                    <div className="w-[80px] border-[1px] h-[80px] rounded-[50%] mx-[5px]    overflow-hidden
                                        md:w-[120px] md:border-[1px] md:h-[120px] md:rounded-[50%] md:mx-[5px]    md:overflow-hidden"  >
                                        <img className=" md:h-[200px] object-cover h-auto w-[400px]" src={dr3} alt="" />
                                    </div>
                                    <div className="w-[100px] border-2 border- h-[100px] rounded-[50%] mx-[5px] ml-[-30px]  overflow-hidden 
                                        md:w-[170px] md:border-2 md:border- md:h-[170px] md:rounded-[50%] md:mx-[5px] md:ml-[-50px]  md:overflow-hidden md:z-50"  >
                                        <img className=" md:h-[200px] object-cover h-auto w-[400px]" src={dr1} alt="" />

                                    </div>
                                    <div className="w-[80px] border-[1px] h-[80px] rounded-[50%] mx-[5px]   ml-[-30px] overflow-hidden
                                        md:w-[120px] md:border-[1px] md:h-[120px] md:rounded-[50%] md:mx-[5px]  md:ml-[-30px] md:overflow-hidden"  >
                                        <img className=" md:h-[200px] object-cover h-auto w-[400px]" src={dr2} alt="" />
                                    </div>
                                </div>
                                <h1 className="text-[12px]  md:text-[18px]  md:max-xl:font-medium md:max-xl:leading-3">Dr Issac Mathew</h1>
                                <h1 className="text-[9px]  md:text-[14px]">Head Cardio</h1>
                            </div>
                        </div>
                    </div>

                </div>


                <div className=" w-full px-14 mt-5 rounded-md  flex justify-center">

                    <motion.div
                     initial={{ x: -100, y: 0 }}
                     whileInView={{ x: 0, y: 0 }}
                     transition={{ duration: 1 }} className="w-1/2 ">
                      <img className="    w-full h-full object-cover rounded-lg " src={doctorGroupPhoto} alt="LOGO" />

                    </motion.div>

                    <motion.div 
                    initial={{ x: 100, y: 0 }}
                   
                    whileInView={{ x: 0, y: 0 }}
                    transition={{ duration: 1 }}
                    className="grid grid-flow-row grid-cols-4 w-auto ml-[30px] h-full gap-3 flex-wrap">

                        {DepartmentIcons.map((values, index) => {
                            return (
                                <motion.div
                                initial={{ x: 100, y: 0 }}
                                animate={{ x: 0, y: 0 }}
                                transition={{ delay: index * 0.07, duration: 1 }}
                                                             
                                key={index} className="w-[100px] hover:border-[2px] flex flex-col  align-middle justify-center rounded-lg hover:border-orange-600  border-2 h-[100px] bg-white text-black text-xs shrink-0 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] ">{values.name}
                                    <div className=" h-full flex align-middle justify-center ">
                                        <img className="object-scale-down rounded-lg hover:scale-110 " src={values.dept} alt="LOGO" />
                                    </div>
                                </motion.div>
                            )
                        })}





                    </motion.div>

                </div>

                <div className="px-16">
                    <div className=" mt-4 w-full   bg-darkgreen rounded-2xl
                                 md:w-full  md:flex md:mt-[20px] md:justify-between md:flex-row center ">

                        <div className="w-full px-6 py-6 text-left text-white 
                                    md:w-1/2 md:flex md:flex-col md:justify-center
                                    lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
                            <h2 className="text-xl font-semibold">NATIONAL IMMUNIZATION AWARENESS MONTH</h2>
                            <p className="mt-[30px] text-xl">Staying up to date on your vaccines can protect you
                                and your loved ones from preventable diseases.</p>
                            <p className="mt-[30px] text-xl">Check the immunization schedule for guidance on
                                recommended routine vaccinations</p>
                        </div>

                        <div className="w-full px-6 py-3 text-left text-white overflow-hidden rounded-r-2xl
                                    md:w-1/2 md:px-0 md:py-0 md:flex md:flex-col md:justify-center md:overflow-hidden md:rounded-r-2xl
                                    lg:w-1/2 lg:px-0 lg:py-0 lg:flex lg:flex-col lg:justify-center lg:overflow-hidden lg:rounded-r-2xl ">
                            <img className="object-cover" src={Banner} alt="" />
                        </div>



                    </div>
                </div>




            </section>

        </>
    )
})

export default HomePageBody