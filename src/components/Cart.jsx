import React from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Link } from "react-router-dom";


const Cart = () => {

  const quantity = useSelector(state=> state.cart.totalQuantity);
  console.log(quantity,"---QUANTITY")

  const dispatch = useDispatch()
  
  const handleCart =()=>{
    dispatch(cartActions.setShowCart())
  }

  return (
    <div className={styles.cartIcon}>
      <h3 onClick={handleCart}><Link  to="/cartItems">Cart: {quantity} Items</Link></h3>
    </div>
  );
};

export default Cart;
