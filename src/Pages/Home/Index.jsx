import React from "react";
import Socials from "../../Components/HomeComponents/Socials";
import Navbar from "../../Components/HomeComponents/Navbar";
import Hero from "../../Components/HomeComponents/Hero";
import About from "../../Components/HomeComponents/About";

const Home = () => {
  return (
    <div className="bg-lightPink">
      <div className="h-screen flex flex-col justify-between overflow-hidden">
        <div>
          <Socials />
          <Navbar />
        </div>
        <Hero />
      </div>
      <About/>
    </div>
  );
};

export default Home;
