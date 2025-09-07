import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; 

const ShoppingCart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total , item) => {
        return total + (item.price * item.quantity)
    }, 0)

    const handleRemoveItem = (product) => {
        dispatch(removeItemFromCart(product));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleIncreaseQuantity = (product) => {
        dispatch(increaseItemQuantity(product))
    }

    const handleDecreaseQuantity  = (product) => {
        dispatch(decreaseItemQuantity(product))
    }
   

  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
            {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                <span>{item.name} - ${item.price}</span>
                <div className="quantity-controls">
                    <button className="quantity-control-btn" onClick={() => handleDecreaseQuantity(item)}>-</button>
                    <span> {item.quantity}</span>
                    <button className="quantity-control-btn" onClick={() => handleIncreaseQuantity(item)}>+</button>
                </div>
                <button className="remove-item-btn" onClick={() => handleRemoveItem(item)}>Remove</button>
                </li>
            ))}
      </ul>
      <button className="clear-cart-btn" onClick={() => handleClearCart()}>Clear Cart</button>
    </div>
  
    </>
  );
};

export default ShoppingCart;
