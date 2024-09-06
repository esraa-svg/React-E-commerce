import React from 'react'
import Slider from "react-slick";

export default function ProuctImageSlider ({images}) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}>
    {images?.map((imgs)=>{
      return  <img class="w-full rounded-md object-cover max-w-lg mx-auto transition-transform duration-300 hover:scale-110" src={imgs} alt="Nike Air" />
    })}
   
        </Slider>
  )
}
