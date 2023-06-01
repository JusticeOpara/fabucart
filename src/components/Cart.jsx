import React from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Link } from "react-router-dom";
import cartbox from '../assets/cartbox.png'

const Cart = () => {

  const quantity = useSelector(state => state.cart.totalQuantity);
  console.log(quantity, "---QUANTITY")

  const dispatch = useDispatch()

  const handleCart = () => {
    dispatch(cartActions.setShowCart())
  }

  return (
    <div className={styles.cartIcon}>
  
      <Link to="/cartItems">
        
        <button onClick={handleCart} className={styles.cartbtn}>  <img src={cartbox} className={styles.cartlogo} alt="logo"  /> </button>
      <span style={{fontSize: '24px',color:"white"} }> {quantity}</span>

      </Link>
    </div>

  );
};

export default Cart;
