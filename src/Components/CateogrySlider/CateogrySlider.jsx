import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Categorie from '../Catgori/Categorie';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import Slider from 'react-slick';

export default function CateogrySlider() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    setIsLoading(true);
    let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    setCategories(data.data);
    setIsLoading(false);
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, 
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full flex justify-center"> 
      <div className="max-w-6xl w-full px-4"> 
        <Slider {...sliderSettings}>
          {categories.map((categorie, index) => (
            <div key={index} className="px-2"> 
              <Categorie categorie={categorie} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
