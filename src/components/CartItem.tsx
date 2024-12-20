import React from 'react';
import { CartItem } from '../types';

interface CartItemProps {
  item: CartItem;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({
  item,
  updateQuantity,
  removeFromCart,
}) => {
  return (
    <li className="cart-item">
      <span>
        {item.name} - ₹{item.price.toFixed(2)} x {item.quantity}
      </span>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) =>
          updateQuantity(item.id, Math.max(1, parseInt(e.target.value, 10)))
        }
      />
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </li>
  );
};

export default CartItemComponent;
