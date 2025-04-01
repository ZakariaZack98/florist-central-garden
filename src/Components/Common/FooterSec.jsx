import React from "react";
import { IoFlowerOutline } from "react-icons/io5";

const FooterSec = ({ data, title }) => {
  return (
    <div className="quickLinks w-1/6 mt-10 flex flex-col gap-y-2 font-poppins">
      <h4 className="font-poppins text-2xl font-semibold mb-5">{title}</h4>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-x-3 my-1.5 cursor-pointer group"
        >
          
          <span className="group-hover:scale-150 group-hover:text-pink-700 group-hover:rotate-360 transition-transform duration-800 ease-in-out">
            <IoFlowerOutline />
          </span>
          
          <span
            onClick={() => navigate(item.path)}
            className="group-hover:text-pink-700 transition-colors duration-500 ease-in-out"
          >
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FooterSec;
