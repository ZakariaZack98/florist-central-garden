import React from "react";
import Socials from "../../Components/HomeComponents/Socials";
import Navbar from "../../Components/HomeComponents/Navbar";
import Hero from "../../Components/HomeComponents/Hero";

const Home = () => {
  return (
    <div className="bg-lightPink dark:bg-gray-900 dark:text-lightPink">
      <div className="h-screen flex flex-col justify-between overflow-hidden">
        <div>
          <Socials />
          <Navbar />
        </div>
        <Hero />
      </div>
    </div>
  );
};

export default Home;
