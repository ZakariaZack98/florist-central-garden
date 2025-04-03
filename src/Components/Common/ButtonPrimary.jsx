import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonPrimary = ({label, clickHandler, path}) => {
  const navigate = useNavigate();
  return (
    <button data-btn-path={path} className='px-8 py-1.5 my-3 bg-white border-2 border-black w-fit font-poppins font-semibold cursor-pointer hover:bg-black hover:text-lightPink duration-300 ease-in' onClick={e => {
      path ? navigate(path) : clickHandler(e)
    }}>
      {label}
    </button>
  )
}

export default ButtonPrimary
