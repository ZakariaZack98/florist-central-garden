import { toast } from "react-toastify";
import { getFlowerData } from "../lib/lib";

const flowerData = getFlowerData();

/**
 * TODO: Check if the product already exists in the cart=======================
 * @param {Array} cart
 * @param {number} pid
 * @returns {boolean} - True if the product exists, false otherwise
 */
export const ExistanceInCart = (cart, pid) => Boolean(cart.find(flower => flower.pid === pid));

/**
 * TODO: Add a product to the cart=============================================
 * @param {Array} cart 
 * @param {Function} setCart
 * @param {number} pid
 */
export const AddToCart = (cart, setCart, pid) => {
  if (ExistanceInCart(cart, pid)) {
    toast.warn('Item already added to cart.')
    return;
  }
  const newCart = [...cart];
  const targetFlower = flowerData.find(flower => flower.pid === pid);
  const flowerForCart = {
    pid: targetFlower.pid,
    imgUrl: targetFlower.imgUrl,
    name: targetFlower.name,
    price: targetFlower.price,
    qty: 1,
    subtotal: targetFlower.price,
  };
  newCart.push(flowerForCart);
  setCart(newCart);
  toast.success('Items successfully added to cart')
};