import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const ProductCard = ({pid, imgUrl, name, bundleSize, price}) => {
  return (
    <div className='w-[20dvw] h-auto p-3 flex flex-col justify-between items-center bg-white shadow-2xl'>
      <picture className='w-full'>
        <img src={imgUrl} alt="" className='w-full h-70 object-cover object-center'/>
      </picture>
      <h4 className='font-poppins text-2xl font-semibold'>{name}</h4>
      <p className='text-sm text-blue-500'>Qty: {bundleSize}pcs bundled</p>
      <h4 className='font-poppins text-xl font-semibold text-green-800'>{price}$</h4>
      <ButtonPrimary label={'Add to Cart'} clickHandler={e => {
        e.stopPropagation();
        console.log(`AddToCart(cart, setCart, pid)`, pid );
      }}/>
    </div>
  )
}

export default ProductCard
