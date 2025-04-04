import React, { useContext } from 'react'
import { RxCrossCircled } from 'react-icons/rx'
import { CartContetxt } from '../../contexts/CartContext';


const CartItemCard = ({pid, imgUrl, name, price, qty, subtotal}) => {
  const {cart, setCart} = useContext(CartContetxt);

  const handleQtyChange = (e, pid) => {
    const newCart = [...cart];
    const targetFlower = newCart.find(flower => flower.pid == pid);
    const idx = newCart.indexOf(targetFlower);
    newCart[idx].qty = Number(e.currentTarget.value);
    newCart[idx].subtotal = Number((targetFlower.price * e.currentTarget.value).toFixed(2));
    setCart(newCart);
  } 

  const removeCartItem = (pid) => {
    const newCart = [...cart];
    const updatedCart = newCart.filter(flower => flower.pid !== pid);
    setCart(updatedCart);
  }

  return (
    <div className='flex items-center w-full py-4'>
      <div className="w-[50%] flex items-center gap-x-2">
        <picture>
          <img src={imgUrl} className='w-10 h-10 object-cover object-center'/>
        </picture>
        <p>{name}</p>
      </div>
      <div className="w-[10%]"><p className='text-end'>{price}$</p></div>
      <div className="w-[20%] text-center">
        <select name="qty" id="qty" className='px-4 py-1 border-2 border-black rounded-lg' value={qty} onChange={(e) => handleQtyChange(e, pid)}>
          {[1, 2, 3, 4, 5].map(qty => {
            return <option key={qty} value={qty}>{qty}</option>
          })}
        </select>
      </div>
      <div className="w-[20%] flex justify-end items-center text-end gap-x-10">
        <p>{subtotal}$</p>
        <span className='me-2 text-3xl text-gray-500 cursor-pointer' onClick={() => removeCartItem(pid)}>
          <RxCrossCircled/>
        </span>
      </div>
    </div>
  )
}

export default CartItemCard
