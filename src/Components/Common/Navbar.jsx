import React, { useContext } from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { GoHeart, GoPerson } from 'react-icons/go'
import Logo from '/images/logo.png'
import { useNavigate } from 'react-router-dom'
import Searchbar from './Searchbar'
import { CartContetxt } from '../../contexts/CartContext'

const Navbar = ({customized}) => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContetxt);
  return (
    <div className={`container mx-auto font-poppins text-sm max-h-15 ${customized ? 'h-0' : 'max-h-15 '} -translate-y-5`}>
      <div className="flex justify-between items-center">
        <Searchbar/>
        <div className="nav flex justify-center items-center gap-x-12">
          {
            ['Home', 'About', Logo, 'Gallery', 'Contact'].map((item, idx) => {
              return idx == 2 ? <img key={idx} src={item} className='w-40 mb-2 cursor-pointer' onClick={() => navigate('/')}/> : (<span key={idx} className='cursor-pointer hover:-translate-y-2 duration-300 ease-in py-1' onClick={() => navigate(`/${item}`)}>{item}</span>)
            })
          }
        </div>
        <div className="icons flex gap-x-2">
          {
            [{path: '/profile', icon: GoPerson}, {path: '/wishlist', icon: GoHeart}, {path: '/cart', icon: CgShoppingCart}].map((item, idx) => (
              <span key={idx} className='relative text-3xl cursor-pointer hover:opacity-50' onClick={() => navigate(item.path)}>
                <item.icon/>
                {item.path === '/cart' && cart.length > 0 && (<span className='absolute -bottom-1 -right-3 w-5 h-5 rounded-full bg-pink-700 flex justify-center items-center text-white font-semibold font-poppins text-sm'>{cart.length}</span>)}
              </span>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
