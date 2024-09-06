import React from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/images/slider-2.jpeg';
import img2 from '../../assets/images/slider-2.jpeg';
import img3 from '../../assets/images/grocery-banner-2.jpeg';


const images = [img1, img2, img3];

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, 
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <Slider {...settings} className="w-full h-full">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </Slider>
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-30" />
     
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Welcome to Our Store
        </h2>
        <p className="text-lg md:text-xl text-white">
          Discover the best products at amazing prices.
        </p>
      </div>
    </div>
  );
};

export default HomeSlider;
