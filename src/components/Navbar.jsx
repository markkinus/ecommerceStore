import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext';

function Navbar() {
  const { cartItems } = useCart();

  // Calculate the total quantity of items in the cart
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity, 0);

  return (
    <nav className = "bg-gray-800 p-4 text-white">
        <div className = "flex items-center justify-between max-w-7xl mx-auto">
    <h1 className = "text-3xl font-bold"> Driply</h1>
    <div className = "flex gap-6">
    <Link to="/" className = "text-white hover:underline">Home</Link>
    <Link to="/Products" className = "text-white hover:underline">Products</Link>
    <Link to="/Cart" className = "text-white hover:underline">
      Cart ({cartCount})
    </Link>
    <Link to="/Login" className = "text-white hover:underline">Login</Link>
    </div>
    </div>
    </nav>
  )
}

export default Navbar