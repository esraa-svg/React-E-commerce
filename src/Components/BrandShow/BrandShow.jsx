import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen/LoadingScreen'

export default function BrandShow() {
    const { id } = useParams();
    const [Brandshow, setBrands] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getBrand();
    }, [id]);

    async function getBrand() {
        try {
            const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`);
            setBrands(data.data);
        } catch (error) {
            console.error("Failed to fetch brand details", error);
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
           
           
            <div className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <button 
                    onClick={() => window.history.back()} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    &#x2715;
                </button>
                <h3 className="text-2xl font-bold text-green-600 mb-4">{Brandshow?.name}</h3>

                <img src={Brandshow?.image} alt={Brandshow?.name} className="w-full h-auto mx-auto" />
                <button 
                    onClick={() => window.history.back()} 
                    className="absolute bottom-4 right-4 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none"
                >
                    Close
                </button>
                        </div>
        </div>
    );
}
