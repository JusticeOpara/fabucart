import React from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";


const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemsList)
  console.log(cartItems, "--CartItems")

  let total = 0;
  const itemList = useSelector(state => state.cart.itemsList)
  itemList.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <div className={styles.cartContainer}>

      <h1 className={styles.hero}>My Cart</h1>
      <ul>

        {cartItems.map((item) => (
          <li key={item.id}>


            <CartItem
              id={item.id}
              name={item.name}
              imgURL={item.imgURL}
              total={item.totalPrice}
              price={item.price}
              quantity={item.quantity}
            />


          </li>

        ))}
      </ul>

      <button className={styles.totalPrice}>

        <h3>Total: ${total}</h3>

      </button>
    </div>
  );
};

export default CartItems;
