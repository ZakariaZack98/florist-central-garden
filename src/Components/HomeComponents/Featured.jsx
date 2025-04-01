import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonPrimary from "../Common/ButtonPrimary";

const Featured = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  const fadeDownVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.2, 
      },
    }),
  };

  return (
    <div ref={ref} className="container mx-auto py-25">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <h3 className="text-3xl font-poppins text-center">Our Photo</h3>
        <h1 className="text-[60px] font-rochester text-center">Our Gallery</h1>
        <div className="productGrid w-full flex justify-center items-center flex-wrap gap-10">
          {new Array(8).fill(undefined).map((_, idx) => (
            <motion.img
              key={idx}
              src={`/images/pr${idx + 1}.png`}
              alt=""
              className="w-[18%]"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeDownVariants}
              custom={idx} 
            />
          ))}
        </div>
        <div className="mt-10">
          <ButtonPrimary label={"Full Gallery"} link={"./shop"} />
        </div>
      </div>
    </div>
  );
};

export default Featured;
