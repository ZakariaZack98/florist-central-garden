import React from 'react'
import ButtonPrimary from '../Common/ButtonPrimary'

const About = () => {
  return (
    <div className="relative overflow-hidden">
      <img src="/images/flower.avif" alt="" className=' rotate-[300deg] absolute top-0 -left-23' data-aos='zoom-in-right' data-aos-duration='2000'/>
      <img src="/images/flower.avif" alt="" className=' rotate-[130deg] absolute z-0 top-77 -right-20' data-aos='zoom-in-right' data-aos-duration='2000'/>
      <div className='container mx-auto'>
      <div className="h-screen flex justify-center items-center ">
      <div className="left w-[60%]">
        <div className="imageSeC relative">
          <picture >
            <img src="/images/about.png" alt="" className='z-10 relative w-[80%] translate-x-30' data-aos="fade-left" data-aos-duration="700"/>
          </picture>
          <div className="absolute w-[65%] h-[80%] bg-[#EFAFBF] rounded-2xl top-[20%] left-[13%] z-0" data-aos="zoom-in" data-aos-duration="700"></div>
        </div>
      </div>
      <div className="right w-[40%]">
        <div className="flex flex-col gap-y-4" data-aos="zoom-in" data-aos-duration="700">
        <h2 className="font-poppins text-3xl">Our Journey</h2>
          <h1 className="font-rochester text-[70px]">About Us</h1>
          <h3 className="font-poppins ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit repudiandae inventore odit sed saepe minima, doloribus fugit cum iure! Odio debitis praesentium maxime accusamus. Quaerat illo deleniti rem neque dolores?</h3>
          <ButtonPrimary label={"Learn More"} path={"/About"} />
        </div>
      </div>
      </div>
      {/* <img src="/images/about.png" alt="" className='bg-[#EFAFBF]'/> */}
    </div>
    </div>
  )
}

export default About
