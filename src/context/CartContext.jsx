import { createContext, useContext, useState } from 'react'

// create a context for the cart
const CartContext = createContext();

//create the provider for the cart context
export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    //add an item to the cart
    function addToCart(product) {
        setCartItems((currentItems) => {
            const existingItem = currentItems.find(item => item.id === product.id);
            
            // If the item already exists in the cart, increase its quantity
            if (existingItem) {
                return currentItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...currentItems, { ...product, quantity: 1 }];
            }
        });
    }

    //remove an item from the cart
    function removeFromCart(productId) {
        setCartItems((currentItems) => 
        currentItems.filter(item => item.id !== productId));
    }

    //update the quantity of an item in the cart
function updateQuantity(productId, newQuantity) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId 
    ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  return (
    <CartContext.Provider value={{ 
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateQuantity }}>
        {children}
        </CartContext.Provider>
        
  )
}

//create a custom hook to use the cart context
export function useCart() {
    return useContext(CartContext);
}