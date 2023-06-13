import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Product.module.css";
import { cartActions } from "../store/cart-slice";
import toast, { Toaster } from 'react-hot-toast'




const Product = ({ name, id, imgURL, price }) => {

  const dispatch = useDispatch()
  const addfCart = () => toast.success('Added to Cart');
  const removefCart = () => toast('Item Removed');

  //    function getItemsQty  (id) {
  //   return cartItems.find(item => item.id ===id)
  //  }
  const qty = useSelector(state => state.cart.totalQuantity)?.qty || 0;
  console.log(qty, "--quantity")




  const addToCart = () => {
    dispatch(cartActions.addToCart({
      name,
      price,
      id,
      quantity: 1,
      imgURL
    }))
  }
  console.log(addToCart, "--ADDTOCART")


  const removeCart = () => {
    dispatch(cartActions.removeCart(id));
  };
  console.log(removeCart, "REMOVE FROM CART")


  return (

    <div className={styles.card}>

      <img className={styles.img} src={imgURL} alt={name} />

      <div className={styles.cardList}>

        <p className={styles.name}>{name}</p>

        <p className={styles.price}>${price}</p>
      </div>

      <div className={styles.productBtn}>


        {/* {qty === 0 ? (
          <button className={styles.addCart} onClick={() => { addToCart(id); addfCart() }} > Add to Cart </button>
        ) : (<div className="">
===
          <div> <button className={styles.removeCart} onClick={() => { removeCart(id); removefCart() }} > Remove From Cart </button> </div>

        </div>)} */}
       {qty === 0 ? (
      <button className={styles.addCart} onClick={() => { addToCart(id); addfCart() }}>Add to Cart</button>

       ): (
          <div>
            <div>
              <button className={styles.removeCart} onClick={() => { removeCart(id); removefCart() }}>Remove From Cart</button>
            </div>
          </div>

        )}

      </div>
      <Toaster />



    </div>


  );
};

export default Product;
