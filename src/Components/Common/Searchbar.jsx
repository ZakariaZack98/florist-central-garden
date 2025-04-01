import React from "react";

const Searchbar = () => {
  return (
    <div className="search flex justify-between p-1 border-2 border-black bg-white w-60">
      <input type="text" placeholder="Search here" className="w-1/2" />
      <button className="px-4 py-1 bg-black text-white">Search</button>
    </div>
  );
};

export default Searchbar;
