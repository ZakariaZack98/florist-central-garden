import React from 'react'
import SocialIcons from '../Common/Socialicons'
import { FaEnvelope } from 'react-icons/fa'


const Socials = () => {
  return (
    <div className='container mx-auto'>
      <div className="flex justify-between py-2 font-poppins translate-y-3">
        <SocialIcons/>
        <div className="email flex gap-x-2 items-center">
          <span><FaEnvelope/></span>
          <p className='text-sm'>query@floristgc.com</p>
        </div>
      </div>
    </div>
  )
}

export default Socials
