import React from 'react'

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
        <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
            View Product
            </button>
    </div>
  )
}

export default ProductCard