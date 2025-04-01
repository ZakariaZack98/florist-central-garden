import React from 'react'
import About from '../../Components/HomeComponents/About'
import Testimony from '../../Components/HomeComponents/Testimony'
import { getTestimonialData } from '../../lib/lib';
import Why from '../../Components/AboutpageComponents/Why';
import InstaBanner from '../../Components/HomeComponents/InstaBanner';


const AboutPage = () => {
  const testimonialData = getTestimonialData();
    const imgArr = testimonialData?.map(item => item.imgUrl);
    const nameArr = testimonialData?.map(item => item.name);
    const textArr = testimonialData?.map(item => item.textContent);
  return (
    <div>
      <About/>
      <Why/>
      <Testimony imgCollections={imgArr} nameCollections={nameArr} textCollections={textArr}/>
      <InstaBanner/>
    </div>
  )
}

export default AboutPage
