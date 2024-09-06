import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProuctImageSlider from '../Components/ProuctImageSlider/ProuctImageSlider'
import { useParams } from 'react-router-dom';
import LoadingScreen from '../Components/LoadingScreen/LoadingScreen';
import RatingsStar from '../Components/RatingsStar/RatingsStar'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'
import { addProducToCart } from '../cartFile';

export default function ProductDetails() {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);
        const[relatedProducts, setrelatedProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProducts();
    }, [id]);
   
    async function getProducts() {
        try {
            let  { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
            setProductDetails(data.data);
         getRelatedProducts(data.data?.category._id)
        } catch (error) {
            console.error("Failed to fetch product details", error);
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <LoadingScreen />;
    }
    async function getRelatedProducts(categoryId){
        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products",{
            params:{
                "category":categoryId
            }
        });
setrelatedProducts(data.data)
    }
    return (
        <div className="bg-white">
    
    <main className="my-8">
        <div className="container mx-auto px-6">
            <div className="md:flex md:items-center">
                <div className="w-full md:w-3/12 lg:h-96 object-contain items-center justify-center mb-20">
                    <ProuctImageSlider images={productDetails?.images} />
                </div>
                <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-9/12">
                    <h3 className="text-gray-700 uppercase text-lg">{productDetails?.title}</h3>
                    <span className="text-gray-500 mt-3">{productDetails?.price}$</span>
                    <hr className="my-3" />
                 
                    <div className="mt-3">
                        <label className="text-gray-600 text-sm" htmlFor="rating">Rating:</label>
                        <RatingsStar rating={productDetails?.ratingsAverage ?? 0} />
                    </div>
                    <div className="mt-3">
                        <label className="text-gray-600 text-sm" htmlFor="category">Description:</label>
                        <h3>{productDetails?.description}</h3>
                    </div>
                    <div className="mt-3">
                        <label className="text-gray-600 text-sm" htmlFor="category">Category:</label>
                        <h3>{productDetails?.category.name}</h3>
                    </div>
                    <div className="mt-3">
                        <label className="text-gray-600 text-sm" htmlFor="subcategory">SubCategory:</label>
                        <h3>{productDetails?.subcategory[0].name}</h3>
                    </div>
                    <div className="mt-3">
                        <label className="text-gray-600 text-sm" htmlFor="subcategory">Brand:</label>
                        <h3>{productDetails?.brand.name}</h3>
                    </div>
                    <div className="flex items-center mt-6">
                        <button  onClick={()=>addProducToCart(productDetails._id)} className="mx-2 px-8 py-2 bg-white text-indigo-600 text-sm font-medium rounded border border-indigo-600 hover:bg-gray-200 focus:outline-none">Add to Cart</button>
                        <i className="fa-solid fa-heart"/>
                    </div>
                </div>
            </div>
          <RelatedProducts products={relatedProducts} />
        </div>
    </main>
    
</div>
    
    );
}
