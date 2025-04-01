import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TestimonialSlide = ({ idCollections, imgUrlCollection, nameCollection, textContentCollection }) => {
  const [activePerson, setActivePerson] = useState(2);

  // Variants for the floating effect
  const floatingVariants = {
    floating: {
      y: [0, -10, 0], 
      transition: {
        duration: 2, 
        repeat: Infinity, 
        ease: 'easeInOut', 
      },
    },
  };

  
  const slideVariants = {
    hidden: { opacity: 0, x: 50 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, 
  };

  return (
    <div className="w-full h-[60dvh]">
      <div className=" h-full mx-auto relative flex flex-col justify-center items-center">
        {imgUrlCollection?.map((url, idx) => (
          <motion.img
            key={idx}
            src={url}
            className={`absolute cursor-pointer object-cover object-center 
            ${activePerson == idx ? ' scale-150 duration-200 ease-in-out shadow-md border-4 border-pink-300' : ''}
            ${idx == 0 ? 'w-18 h-18 rounded-full bottom-10 left-35' : ''}
            ${idx == 1 ? 'w-15 h-15 rounded-full top-20 left-80' : ''}
            ${idx == 2 ? 'w-18 h-18 rounded-full top-10 left-150' : ''}
            ${idx == 3 ? 'w-15 h-15 rounded-full top-20 right-76' : ''}
            ${idx == 4 ? 'w-18 h-18 rounded-full bottom-30 right-50' : ''}`}
            onClick={() => setActivePerson(idx)}
            animate="floating" 
            variants={floatingVariants}
          />
        ))}
        <div className="textPart max-w-1/2 mt-18 flex flex-col gap-y-3">
          <motion.p
            key={activePerson} // Trigger re-render when activePerson changes
            className="text-center font-poppins"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideVariants}
          >
            "{textContentCollection[activePerson]}"
          </motion.p>
          <motion.p
            key={`name-${activePerson}`} // Trigger re-render for the name
            className="text-center text-xl font-semibold font-poppins"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={slideVariants}
          >
            {nameCollection[activePerson]}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
