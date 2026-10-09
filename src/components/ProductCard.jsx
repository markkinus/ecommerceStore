import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className='p-4 max-w-7xl mx-auto hover:bg-gray-200'>
        <img 
        src={product.image} 
        alt={product.title} 
        className='w-full h-64 object-contain mb-4' 
        />
        <h2 className='text-lg font-bold mb-2'>{product.title}</h2>
        <p className='text-gray-700 mb-2'>
            ${product.price}
            </p>
        <Link to={`/products/${product.id}`} 
        className="mt-4 block w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-white hover:bg-gray-700"> 
        View Product
        </Link>
    </div>
  )
}

export default ProductCard