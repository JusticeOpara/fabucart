import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Product.module.css";
import { cartActions } from "../store/cart-slice";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addToCart({
      name,
      price,
      id,
      quantity: 1,
      imgURL
    }))
  }


  return (

    <div className={styles.card}>

      <img className={styles.img} src={imgURL} alt={name} />

      <div className={styles.cardList}>

        <p className={styles.name}>{name}</p>

        <p className={styles.price}>${price}</p>
      </div>

      <button className={styles.btn} onClick={addToCart}>
        Add To Cart
      </button>


    </div>


  );
};

export default Product;
