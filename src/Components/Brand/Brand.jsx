import React from 'react';
import { Link } from 'react-router-dom';

export default function Brand({ brand }) {
  return (
    <div className="max-w-7xl mx-auto gap-2 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="pt-5 flex flex-wrap justify-center gap-4">
        <div className="bg-white shadow-lg rounded-lg w-full sm:w-80 md:w-64 h-80 transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
          <Link to={`/Brandshow/${brand._id}`}>
            <div className="flex items-center justify-center h-48 overflow-hidden bg-gray-100 rounded-t-lg">
              <img
                className="max-h-full max-w-full object-contain filter brightness-90 contrast-125 hover:brightness-110 transition duration-300"
                src={brand.image}
                alt={`${brand.name} logo`}
              />
            </div>
            <div className="px-4 py-4">
              <h3 className="text-black font-bold text-xl tracking-wide truncate">
                {brand.name}
              </h3>
              <p className="mt-2 text-gray-600 text-base line-clamp-2">
                {brand.slug}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
