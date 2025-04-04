import React, { useContext } from "react";
import ButtonPrimary from "./ButtonPrimary";
import { AddToCart, ExistanceInCart } from "../../utils/utils";
import { CartContetxt } from "../../contexts/CartContext";

const ProductCard = ({ pid, imgUrl, name, desc, bundleSize, price }) => {
  const { cart, setCart } = useContext(CartContetxt);
  return (
    <div className="w-[40dvw] h-70 p-3 flex justify-between items-stretch gap-x-4 bg-white shadow-2xl " data-aos="zoom-in" data-aos-duration="700">
      <img src={imgUrl} alt="" className="w-[40%] h-full  object-cover object-center" />

      <div className="right w-[60%] flex flex-col justify-between h-full">
        <h4 className="font-poppins text-2xl font-semibold">{name}</h4>
        <p className="font-poppins">"{desc}"</p>
        <p className="text-sm text-blue-500">Qty: {bundleSize}pcs bundled</p>
        <h4 className="font-poppins text-xl font-semibold text-green-800">{price}$</h4>
        <ButtonPrimary
          label={`${ExistanceInCart(cart, pid) ? 'Added to Cart ✔' : 'Add to Cart'}`}
          colorClass={`${ExistanceInCart(cart, pid) ? 'bg-green-600 text-white' : 'bg-pink-700 text-white'}`}
          clickHandler={(e) => {
            e.stopPropagation();
            AddToCart(cart, setCart, pid);
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
