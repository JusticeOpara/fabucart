import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Cart.module.css";
import { cartActions } from "../store/cart-slice";


const CartItem = ({ name, quantity, total, price, id, imgURL }) => {
  const dispatch = useDispatch();



  const incrementCartItem = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
        imgURL
      })
    );
  };

  const decrementCartItem = () => {
    dispatch(cartActions.removeCart(id));
  };


  return (
    <div className={styles.cartItem}>
      {/* <div className={styles.itemsList}> */}
      <div className={styles.item}>

        <img src={imgURL} className={styles.imageItem} />

        <h2>Total ${total}</h2>

      </div>


      <h2 className={styles.text}> {name}</h2>

      <div className={styles.xyz00000}>

        <p>x{quantity}</p>

        <button className={styles.cartActions} onClick={decrementCartItem}>
          -
        </button>

        <button className={styles.cartActions} onClick={incrementCartItem}>
          +
        </button>

      </div>



    </div>

    // </div>
  );
};


export default CartItem;


