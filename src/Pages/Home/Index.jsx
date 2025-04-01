import React from "react";
import Socials from "../../Components/HomeComponents/Socials";
import Navbar from "../../Components/HomeComponents/Navbar";
import Hero from "../../Components/HomeComponents/Hero";
import About from "../../Components/HomeComponents/About";
import Featured from "../../Components/HomeComponents/Featured";
import Testimony from "../../Components/HomeComponents/Testimony";
import TestimonialSlide from "../../Components/Common/TestimonialSlide";
import { getTestimonialData } from "../../lib/lib";

const Home = () => {
  const testimonialData = getTestimonialData();
  const imgArr = testimonialData?.map(item => item.imgUrl);
  const nameArr = testimonialData?.map(item => item.name);
  const textArr = testimonialData?.map(item => item.textContent);

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
      <Featured/>
      <Testimony imgCollections={imgArr} nameCollections={nameArr} textCollections={textArr}/>
    </div>
  );
};

export default Home;
