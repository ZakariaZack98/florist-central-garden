import React from "react";
import ButtonPrimary from "./ButtonPrimary";

const ProductCard = ({ pid, imgUrl, name, desc, bundleSize, price }) => {
  return (
    <div className="w-[40dvw] h-70 p-3 flex justify-between items-stretch gap-x-4 bg-white shadow-2xl ">
      <img src={imgUrl} alt="" className="w-[40%] h-full  object-cover object-center" />

      <div className="right w-[60%] flex flex-col justify-between h-full">
        <h4 className="font-poppins text-2xl font-semibold">{name}</h4>
        <p>"{desc}"</p>
        <p className="text-sm text-blue-500">Qty: {bundleSize}pcs bundled</p>
        <h4 className="font-poppins text-xl font-semibold text-green-800">{price}$</h4>
        <ButtonPrimary
          label={"Add to Cart"}
          clickHandler={(e) => {
            e.stopPropagation();
            console.log(`AddToCart(cart, setCart, pid)`, pid);
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
