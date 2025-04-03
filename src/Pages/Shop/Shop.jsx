import React, { useEffect, useState } from 'react'
import { getFlowerData } from '../../lib/lib'
import ProductCard from '../../Components/Common/ProductCard';
import AOS from "aos";
import "aos/dist/aos.css";

const Shop = () => {
  const flowersData = getFlowerData();
  const [activeCat, setActiveCat] = useState('All');
  const [showingData, setShowingData] = useState(flowersData);

  const getCategories = () => {
    const catArr = flowersData.map(flower => flower.category);
    const uniqueValSet = new Set([...catArr]);
    return Array.from(uniqueValSet)
  }
  const categories = getCategories();


  useEffect(() => {
    activeCat === 'All' ? setShowingData(flowersData) : setShowingData(flowersData.filter(flower => flower.category === activeCat))
    AOS.refresh();
  }, [activeCat])

  return (
    <div className='container mx-auto py-10'>
      <h1 className="text-center text-[100px] font-bold font-rochester text-pink-700">Our Gallery</h1>
      <div className="categorySec flex justify-center items-center gap-x-3">
      <p className={`px-6 py-2 rounded-3xl font-poppins border-gray-400 border-2 cursor-pointer ${activeCat === 'All' ? 'bg-pink-400 text-white border-none' : ' border-gray-400'}`} onClick={() => {
              setActiveCat('All');
            }}>All</p>
        {
          categories?.map((cat, idx) => (
            <p key={idx} className={`px-6 py-2 rounded-3xl font-poppins border-gray-400 border-2 cursor-pointer ${activeCat === cat ? 'bg-pink-400 text-white border-none' : ' border-gray-400'}`} onClick={() => {
              setActiveCat(cat);
            }}>{cat}</p>
          ))
        }
      </div>
      <div className="productGrid flex flex-wrap justify-evenly items-center gap-y-10 h-fit overflow-hidden py-20">
        {
          showingData.map(flower => <ProductCard key={flower.pid} pid={flower.pid} imgUrl={flower.imgUrl} name={flower.name} desc={flower.desc} bundleSize={flower.bundleSize} price={flower.price}/>)
        }
      </div>
    </div>
  )
}

export default Shop
