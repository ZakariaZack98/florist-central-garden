import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const ProductCard = () => {
  return (
    <div className='w-[20dvw] h-auto p-3 flex flex-col justify-between items-center'>
      <picture>
        <img src="/public/images/pr1.png" alt="" className='w-full'/>
      </picture>
      <h4 className='font-poppins text-2xl font-semibold'>Red Tulips</h4>
      <p className='text-sm text-blue-500'>Qty: 24pcs bundled</p>
      <h4 className='font-poppins text-xl font-semibold text-green-800'>12.86$</h4>
      <ButtonPrimary label={'Add to Cart'}/>
    </div>
  )
}

export default ProductCard
