import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialSlide from "../Common/TestimonialSlide";

const Testimony = ({ idCollections, imgCollections, nameCollections, textCollections }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1, 
    arrows: false, 
  };

  const getDataCollectionForEachArr = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i += 5) {
      result.push(arr.slice(i, i + 5));
    }
    return result;
  };

  const imgCollectionsbySlides = getDataCollectionForEachArr(imgCollections);
  const nameCollectionsbySlides = getDataCollectionForEachArr(nameCollections);
  const textCollectionsbySlides = getDataCollectionForEachArr(textCollections);

  console.log(imgCollections)

  return (
    <div className="container mx-auto h-screen ">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center w-full">
          <h3 className="font-poppins text-3xl font-semibold">Testimonial</h3>
          <h1 className="font-rochester text-[60px]">What Clients Say</h1>
          <div className="relative w-full mt-10">
            <Slider {...settings}>
              {imgCollectionsbySlides?.map((data, idx) => (
                <div key={idx} className="w-full">
                  <TestimonialSlide
                    imgUrlCollection={data}
                    nameCollection={nameCollectionsbySlides[idx]}
                    textContentCollection={textCollectionsbySlides[idx]}
                  />
                </div>
              ))}
            </Slider>
            <div className="anim">
            <img src="/images/testimonial.png" alt="" className="absolute top-0 left-20 w-50" data-aos="zoom-in-right" data-aos-duration="1000" data-aos-delay="1000"/>
            <img src="/images/testimonial.png" alt="" className="absolute bottom-0 right-17 w-50 rotate-180" data-aos="zoom-in-right" data-aos-duration="1000"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
