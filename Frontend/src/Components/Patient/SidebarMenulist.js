import { HiArrowSmRight,HiArrowSmLeft, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

export const SidebarList = [
    {
        name: "Overview",
        link: "/userdashboard",
        icon: HiChartPie
    },
    {
        name: "Previous Consultation",
        link: "/userdashboard/PreviousConsultation",
        icon: HiInbox
    },
    {
        name: "Book Consultation",
        link: "/userdashboard/BookConsultation",
        icon:HiViewBoards
    },
    {
        name: "Profile",
        link: "/userdashboard/profile",
        icon: HiUser
    }
  
]