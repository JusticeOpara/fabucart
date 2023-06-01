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
      
      <div className={styles.item}>

        <div className={styles.subItem}>

          <div className={styles.imgBox}>

            <img src={imgURL} className={styles.imageItem} />

          </div>

          <h2 className={styles.text}> {name}</h2>
        </div>


        <h4 className={styles.amount}>Total ${total}</h4>



      </div>



      <div className={styles.countAction}>

        <p>Quantity : {quantity}</p>

        <div>
          <button className={styles.cartActions} onClick={decrementCartItem}>
            -
          </button>

          <button className={styles.cartActions} onClick={incrementCartItem}>
            +
          </button>

        </div>


      </div>


      {/* </div> */}


    </div>


  );
};


export default CartItem;


