import React from 'react'
import Socials from '../../Components/HomeComponents/Socials'
import Navbar from '../../Components/HomeComponents/Navbar'

const Home = () => {
  return (
    <div className='bg-lightPink dark:bg-gray-900 dark:text-lightPink'>
      <Socials/>
      <Navbar/>
    </div>
  )
}

export default Home
