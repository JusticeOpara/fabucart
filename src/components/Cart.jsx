import React from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Cart = () => {

  const quantity = useSelector(state=> state.cart.totalQuantity);
  console.log(quantity,"---QUANTITY")

  const dispatch = useDispatch()
  
  const handleCart =()=>{
    dispatch(cartActions.setShowCart())
  }

  return (
    <div className={styles.cartIcon}>
      <h3 onClick={handleCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
