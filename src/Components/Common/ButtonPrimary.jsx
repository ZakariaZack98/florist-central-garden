import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonPrimary = ({label, link}) => {
  const navigate = useNavigate();
  return (
    <button data-btn-link={link} className='px-8 py-1.5 my-3 bg-white border-2 border-black w-fit font-poppins font-semibold cursor-pointer hover:bg-black hover:text-lightPink duration-300 ease-in' onClick={() => navigate(link)}>
      {label}
    </button>
  )
}

export default ButtonPrimary
