import React from 'react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <div className = "p-4 max-w-7xl mx-auto flex items-center justify-center flex-col px-6">
    <h1 className = "text-3xl font-bold text-black">Welcome to Driply</h1>
    <p className = "text-lg pt-3">We offer a wide range of products to suit your needs. Browse our collection and find the perfect items for you!</p>
    <div className = "mt-6 flex justify-center">
      <Button asChild>
        <Link to="/products">
          Shop Now
        </Link>
      </Button>
    </div>
    </div>
  )
}

export default Homepage