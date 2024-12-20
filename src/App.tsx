import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct';
import { Product, CartItem } from './types';
import './index.css';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Apple', price: 1.0 },
    { id: 2, name: 'Banana', price: 0.5 },
    { id: 3, name: 'Orange', price: 0.8 },
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const addProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div className="container">
      <h1> Shopzy </h1>
      <AddProduct addProduct={addProduct} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
