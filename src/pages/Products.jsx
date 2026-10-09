import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'
import axios from 'axios'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null) 

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.log("Error fetching products:", error)
        setError("Failed to fetch products. Please try again later.")
        setLoading(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p className="p-8">Loading...</p>
  }

  if (error) {
    return <p className="p-8 text-red-600">{error}</p>
  }

  return (
    <div className='p-4 max-w-7xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>
        Our Products
        </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {products.map((product) => (
          <ProductCard
           key={product.id} 
           product={product} 
           />
        ))}
      </div>
    </div>
  )
}

export default Products