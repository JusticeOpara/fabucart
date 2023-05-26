import React from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";


const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemsList)
  console.log(cartItems, "--CartItems")
  
  return (
    <div className={styles.cartContainer}>
      <h2>Your Cart</h2>
      <ul>

        {cartItems.map((item) => (
          <li key={item.id}>
            
            
            <CartItem
              id={item.id}
              name={item.name}
              total={item.totalPrice}
              price={item.price}
             quantity={item.quantity} 
              />

            
          </li>

        ))}
      </ul>
    </div>
  );
};

export default CartItems;
