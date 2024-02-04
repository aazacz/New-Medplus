import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarUser from '../Components/Patient/NavbarUser';
import SidebarLeft from '../Components/Common/SidebarLeft';
import { SidebarList } from '../Components/Patient/SidebarMenulist';

const list = [

]



const UserDashboard = () => {
    return (
        <div className='h-screen w-full flex flex-col bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 '>

            <section className='flex flex-grow '>
                {/* Sidebar */}
                <div className=' rounded-2xl w-[260px] flex-shrink-0 '>
                    <SidebarLeft SidebarList={SidebarList} bg={"lightgreen"} />
                </div>
                {/* Content */}
                <div className='w-full flex flex-col  '>
                    <div className=' w-full h-[50px] flex-grow'></div>
                    <div className='w-full bg-white rounded-s-3xl h-full'>

                        <Outlet />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default UserDashboard;
