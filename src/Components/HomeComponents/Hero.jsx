import React from "react";
import Hero1 from "/images/hero(1).png";
import Hero2 from "/images/hero(2).png";
import Hero3 from "/images/hero(3).png";
import { motion } from "framer-motion";
import ButtonPrimary from "../Common/ButtonPrimary";

const Hero = () => {
  const slideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8, 
        delay: custom * 0.3, // Delay based on index
      },
    }),
  };

  const hoverEffect = {
    y: -20, 
    transition: { duration: 0.3, ease: "easeInOut" }, 
  };

  const heroTextVarients = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="container mx-auto pt-20 pb-30">
      <div className="flex justify-between items-center">
        <motion.div
          className="left w-[40%] flex flex-col justify-center gap-y-6"
          variants={heroTextVarients}
          initial="hidden"
          animate="visible">
          <h2 className="font-poppins text-3xl">New Flowers</h2>
          <h1 className="font-rochester text-[70px]">For Wedding Day</h1>
          <h3 className="font-poppins text-2xl">Exclusive offer -10% for this week</h3>
          <ButtonPrimary label={"Shop Now"} link={"/shop"} />
        </motion.div>
        <div className="right w-[60%] flex justify-end">
          {[Hero1, Hero2, Hero3].map((src, idx, arr) => (
            <motion.picture
              key={idx}
              className={`${idx == 2 ? "ms-10" : ""}`}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              custom={arr.length - 1 - idx}
              whileHover={hoverEffect}
            >
              <img src={src} alt={`Hero ${idx + 1}`} />
            </motion.picture>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
