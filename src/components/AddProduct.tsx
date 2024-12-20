import React, { useState } from 'react';
import { Product } from '../types';

interface AddProductProps {
  addProduct: (product: Product) => void;
}

const AddProduct: React.FC<AddProductProps> = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && parseFloat(price) > 0) {
      const newProduct: Product = {
        id: Date.now(),
        name: name.trim(),
        price: parseFloat(price),
      };
      addProduct(newProduct);
      setName('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
