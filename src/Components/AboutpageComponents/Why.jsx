import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Why = () => {
  const data = [
    {
      id: 1,
      title: 'Freshness Guaranteed',
      textContent: 'We ensure that every bouquet and arrangement is crafted with the freshest flowers, handpicked to maintain their beauty and fragrance for longer.'
    },
    {
      id: 2,
      title: '24/7 Delivery',
      textContent: 'Our round-the-clock delivery service ensures your flowers reach their destination on time, no matter the hour or occasion.'
    },
    {
      id: 3,
      title: 'Expert Guidance',
      textContent: 'Our team of floral experts is here to guide you in selecting the perfect arrangement for any event, ensuring your vision comes to life.'
    },
    {
      id: 4,
      title: 'Customization Option',
      textContent: 'We offer personalized floral arrangements tailored to your preferences, making every bouquet as unique as your special moments.'
    },
  ];

  // Hook to detect when the component is in view
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animation variants for the image
  const imageVariants = {
    hidden: { rotate: -30}, 
    visible: {
      rotate: 0,
      transition: { duration: 0.8, ease: 'linear' }, 
    },
  };

  return (
    <div className="whybg overflow-hidden">
      <div className="container mx-auto font-poppins">
        <div className="relative w-full h-svh flex flex-wrap justify-around items-center gap-x-50">
          {data?.map((item) => (
            <div key={item.id} className={`w-1/4 relative ${item.id % 2 === 0 ? 'text-end' : ''}`} data-aos="zoom-in" data-aos-duration="500" data-aos-delay={`${item.id *200}`}>
              <h1 className="text-[160px] absolute top-0 left-0 font-black opacity-20 text-pink-800">{item.id}</h1>
              <h3 className="text-[30px] font-bold text-pink-800">{item.title}</h3>
              <p className="opacity-60">{item.textContent}</p>
            </div>
          ))}
          {/* Animated Image */}
          <motion.div
            ref={ref} // Attach the ref to detect when the image comes into view
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={imageVariants}
            className="absolute w-[50%]"
            
            
          >
            <img src="images/ad.png" alt="" className="flower-shadow" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Why;
