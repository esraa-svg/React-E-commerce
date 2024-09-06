import React from 'react'
import {Link} from 'react-router-dom'

export default function Categorie({categorie}) {
  return (
    <div class="line-clamp-2 max-w-2xl mx-auto gap-2 pt-20 px-3">
  <div class="pt-5 flex flex-wrap justify-center gap-4">
    
    <div class="bg-gradient-to-r  shadow-lg rounded-lg max-w-sm w-full sm:w-64 h-80 transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
      <a href="#">
        <div class="h-64 flex items-center justify-center">
          <img class="max-h-full max-w-full object-contain filter brightness-90 contrast-125 hover:brightness-110 transition duration-300" src={categorie.image} alt="product image"/>
        </div>
      </a>
      <div class="px-8 pb-15 pt-2 flex flex-col justify-between h-20">
        <Link to={"/ProductDetails/"+ categorie._id}>
          <h3 class=  "  text-black font-bold text-lg tracking-wide line-clamp-3 mb-15 pb-8">
            {categorie.name}
            <p className="  line-clamp-5 text-black text-opacity-90 dark:text-gray-300 text-base">{categorie.slug}</p>

          </h3>
        </Link>
      </div>
    </div>
  
  </div>
</div>

  )
}

