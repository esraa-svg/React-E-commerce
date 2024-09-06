import Slider from 'react-slick'
import { Link } from 'react-router-dom';
import { addProducToCart } from '../../cartFile';
export default function RelatedProducts({products}) {
    
    var settings = {
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 4,
        margin:20
      };
  return (
    <div className="mt-16">
    <h3 className="text-gray-600 text-2xl font-medium">More Products</h3>
    
    <Slider {...settings}>
    {products.map((product,index)=>
    {
        return <div  key= {index} className="w-full max-w-sm mx-auto  p-2 overflow-hidden ">
            <div className='rounded-md shadow-md'>
            <div className="flex items-end justify-end h-56 w-full bg-cover bg-center" style={{ backgroundImage: `url(${product.imageCover})` }}>
                <button onClick={()=>addProducToCart(product._id)} className="p-2 rounded-md bg-gray-600 text-white mx-5 -mb-4 focus:outline-none focus:bg-blue-500">
                <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
            <div className="px-5 py-3">
            <Link to ={"/productDetails/" + product._id}>
                <h3 className="text-gray-700 uppercase line-clamp-1">{product.title}</h3>
                </Link>
                <span className="text-gray-500 mt-2">{product.price}</span>
            </div>
            </div>
        </div>
    })}
     </Slider>  
    </div>

  )
}
