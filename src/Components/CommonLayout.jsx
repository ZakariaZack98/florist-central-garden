import React from 'react'
import Navbar from './Common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Common/Footer'
import Socials from './Common/Socials'

const CommonLayout = () => {
  return (
    <div className='bg-lightPink'>
      <Socials/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default CommonLayout
