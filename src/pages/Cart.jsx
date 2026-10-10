import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
  return (
    <div className='p-4 max-w-7xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Shopping Cart</h1>
      <p className = "text-gray-600">Your cart is empty.</p>
    </div>
  )
}

return (
  <div className = 'p-4 max-w-7xl mx-auto'>
    <h1 className='text-2xl font-bold mb-4'>Shopping Cart</h1>
    
    <div className = "space-y-4">
      {cartItems.map((item) => (
        <div 
        key={item.id} 
        className = "flex items-center justify-between border p-4 rounded">
          <img 
          src={item.image}
          alt={item.title}
          className = "w-16 h-16 object-contain mr-4"
          />
          <div className = "flex-1">
            <h2 className = "text-lg font-semibold">{item.title}</h2>
            <p className = "text-gray-600">${item.price} x {item.quantity}</p>
          </div>
          <button 
          onClick={() => removeFromCart(item.id)}
          className = "text-red-600 hover:text-red-800">
            Remove
          </button>
        </div>
      ))}
    </div>
  </div>
)
}

export default Cart