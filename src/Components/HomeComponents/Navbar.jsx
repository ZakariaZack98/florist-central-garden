import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { GoHeart, GoPerson } from 'react-icons/go'
import Logo from '/images/logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='container mx-auto font-poppins text-sm max-h-15 -translate-y-5'>
      <div className="flex justify-between items-center">
        <div className="search flex justify-between p-1 border-2 border-black bg-white max-w-1/6">
          <input type="text" placeholder='Search here' className='w-1/2'/>
          <button className='px-4 py-1 bg-black text-white'>Search</button>
        </div>
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
