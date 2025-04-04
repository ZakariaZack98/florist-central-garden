import React, { createContext, useState } from 'react'

const CartContetxt = createContext();

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  return (
    <CartContetxt.Provider value={{cart, setCart}}>
      {children}
    </CartContetxt.Provider>
  )
}

export { CartContetxt , CartProvider }
