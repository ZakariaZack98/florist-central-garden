import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstaBanner = () => {
  return (
    <div className="container mx-auto py-25">
      <div className="imgSec relative flex justify-center items-center w-full group">
        {
          [
            'https://images.unsplash.com/photo-1533907650686-70576141c030?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdpdGglMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D',
            'https://plus.unsplash.com/premium_photo-1674498703303-675482e988a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://plus.unsplash.com/premium_photo-1664442593027-6630ad07697e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdpdGglMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHdpdGglMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D',
          ].map((url, idx) => (
            <img key={idx} src={url} className="w-60 h-60 object-center object-cover" />
          ))
        }
        {/* Insta Logo */}
        <div className="instaLogo absolute overflow-hidden h-[50%] w-35 bg-[#b8b8b8] flex flex-col z-10 cursor-pointer opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
          <span className="h-3/4 flex justify-center items-center text-4xl translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <FaInstagram />
          </span>
          <div className="call w-full h-1/4 translate-y-10 overflow-hidden bg-black text-white hover:bg-pink-700 font-semibold text-sm tracking-[2em] group-hover:tracking-wider font-poppins flex justify-center items-center group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <span>FOLLOW</span>
          </div>
        </div>
        {/* Insta Overlay */}
        <div className="instaOverlay absolute w-240 h-full top-0 left-[12.5%] bg-[#000000a6] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
      </div>
    </div>
  );
};

export default InstaBanner;
