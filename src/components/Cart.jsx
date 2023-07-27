import React from "react";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Link } from "react-router-dom";
// import cartbox from '../assets/cartbox.png'


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

        {/* <button  className={styles.cartbtn}> */}
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleCart} width="20" height="20" viewBox="0 0 16 16"><path fill="white"
          d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 
        1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527z"/></svg>

        {/* </button> */}

        <span style={{ fontSize: '20px', color: "white" }}> {quantity}</span>

      </Link>

    </div>

  );
};

export default Cart;
