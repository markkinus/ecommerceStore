import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className = "bg-gray-800 p-4 text-white">
        <div className = "flex items-center justify-between max-w-7xl mx-auto">
    <h1 className = "text-3xl font-bold">Sarah's Store</h1>
    <div className = "flex gap-6">
    <Link to="/" className = "text-white hover:underline">Home</Link>
    <Link to="/Products" className = "text-white hover:underline">Products</Link>
    <Link to="/Cart" className = "text-white hover:underline">Cart</Link>
    <Link to="/Login" className = "text-white hover:underline">Login</Link>
    </div>
    </div>
    </nav>
  )
}

export default Navbar