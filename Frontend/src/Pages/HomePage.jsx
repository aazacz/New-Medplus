import React from 'react'
import NavbarUser from '../Components/Patient/NavbarUser'
import HomePageBody from '../Components/Patient/HomePageBody'
import Footer from '../Components/Patient/Footer'

const list = [
    {
        li: 'HOME',
        link: '/',
    },

    {
        li: 'ABOUT',
        link: '/about',
    },
    {
        li: 'LOGIN',
        link: '/login',
    },
]

const Homepage = () => {
  return (
    <>
    <div className='relative z-50 top-4'>

    <NavbarUser list={list}/>
    </div>

    <div className='relative top-[-60px] overflow-x-hidden'>
    <HomePageBody/>
    </div>

    <Footer/>
    </>
  )
}

export default Homepage