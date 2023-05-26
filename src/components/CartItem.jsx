import React from "react";
import { useDispatch } from "react-redux";
import styles from"./Cart.module.css";
import  {cartActions}  from "../store/cart-slice";


const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  
 
  const incrementCartItem = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };

  const decrementCartItem = () => {
    dispatch(cartActions.removeCart(id));
  };


  return (
    <div className={styles.cartItem}>
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>

      <button className={styles.cartActions} onClick={ decrementCartItem}>
      -
      </button>

      <button className={styles.cartActions} onClick={incrementCartItem}>
       +
      </button>

    </div>
  );
};


// const CartItem = ({ name, quantity, total, price, id }) => {

//   const dispatch = useDispatch();

//   const incrementCartItem = () => {
//     dispatch(
//       cartActions.addToCart({
//         name,
//         id,
//         price,
//       })
//     );
//   };

//   const decrementCartItem = () => {
//     dispatch(cartActions.removeCart(id));
//   };

//   return (
//     <div className="cartItem">
//       <h2> {name}</h2>
//       <p>${price} /-</p>
//       <p>x{quantity}</p>
//       <article>Total ${total}</article>
//       <button onClick={decrementCartItem} className="cart-actions">
//         -
//       </button>
//       <button onClick={incrementCartItem} className="cart-actions">
//         +
//       </button>
//     </div>
//   );
// };
export default CartItem;
