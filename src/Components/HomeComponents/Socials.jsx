import React from 'react'
import { FaEnvelope, FaFacebookSquare, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa'

const Socials = () => {
  return (
    <div className='container mx-auto'>
      <div className="flex justify-between py-2 font-poppins translate-y-3">
        <div className="icons flex gap-x-2">
          {
            [FaFacebookSquare, FaTwitter, FaInstagram, FaTiktok, FaLinkedin].map((Icon, idx) => (
              <span key={idx} className='hover:opacity-45 cursor-pointer'>
                <Icon/>
              </span>
            ))
          }
        </div>
        <div className="email flex gap-x-2 items-center">
          <span><FaEnvelope/></span>
          <p className='text-sm'>query@floristgc.com</p>
        </div>
      </div>
    </div>
  )
}

export default Socials
