import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { GoHeart, GoPerson } from 'react-icons/go'
import Logo from '/images/logo.png'
import { useNavigate } from 'react-router-dom'
import Searchbar from './Searchbar'

const Navbar = ({customized}) => {
  const navigate = useNavigate();
  return (
    <div className={`container mx-auto font-poppins text-sm max-h-15 ${customized ? 'h-0' : 'max-h-15 '} -translate-y-5`}>
      <div className="flex justify-between items-center">
        <Searchbar/>
        <div className="nav flex justify-center items-center gap-x-12">
          {
            ['Home', 'About', Logo, 'Gallery', 'Contact'].map((item, idx) => {
              return idx == 2 ? <img key={idx} src={item} className='w-40 mb-2'/> : (<span key={idx} className='cursor-pointer hover:-translate-y-2 duration-300 ease-in py-1' onClick={() => navigate(`/${item}`)}>{item}</span>)
            })
          }
        </div>
        <div className="icons flex gap-x-2">
          {
            [{path: '/profile', icon: GoPerson}, {path: '/wishlist', icon: GoHeart}, {path: '/cart', icon: CgShoppingCart}].map((item, idx) => (
              <span key={idx} className='text-3xl cursor-pointer hover:opacity-50' onClick={() => navigate(item.path)}>
                <item.icon/>
              </span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
