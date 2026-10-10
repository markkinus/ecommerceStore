import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Outlet, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductDetails() {
  const { id }= useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error fetching product details:", error);
        setError("Failed to fetch product details. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className='p-4 max-w-7xl mx-auto'>Loading...</div>;
  }

  if (error) {
    return <div className='p-4 max-w-7xl mx-auto text-red-500'>{error}</div>;
  }

  if (!product || !product.id) {
    return <div className='p-4 max-w-7xl mx-auto'>Product not found.</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-auto object-contain"
        />
        <div className="md:w-1/2">
          <p className="text-2xl mb-4">{product.category}</p>
          <h1 className="text-xl font-bold mb-4">{product.title}</h1>
          <p className="text-lg font-semibold mb-4">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-8">
        <nav className="flex gap-4 mb-4">
          <NavLink
            to={`/products/${id}/`}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Overview
          </NavLink>
          <NavLink
            to={`/products/${id}/reviews`}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Reviews
          </NavLink>
          <NavLink
            to={`/products/${id}/specifications`}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Specifications
          </NavLink>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}

export default ProductDetails