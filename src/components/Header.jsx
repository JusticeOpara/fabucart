import React from "react";
import Cart from "./Cart";
import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import shopping from '../assets/shopping.png';
import cartlogo from '../assets/cartlogo.png';

// import cart from '../assets/cart.png'
const Header = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(authActions.loggedOut())
  }
  console.log(handleLogout, "----logout")

  return (

    <>
      <nav className={styles.navbar}>
        <div className={styles.navlogo}>
          <img src={cartlogo} className={styles.cartlogo} alt="logo" />
          <p>Fabucart</p>

        </div>

        <Cart />
       
      </nav>

    

      <div className={styles.header}>

        <div className={styles.firstpath}>

          <h1 className={styles.headerText}>

            <span class={styles.greetings}> Welcome to </span>

            <span className={styles.brandname}> Fabucart </span>
          </h1>

          <h1 className={styles.brandbold}> Let's Level up
            your Game  </h1>

          <p className={styles.brandtext}> Shop with us today and Enjoy </p>

          <h1 className={styles.discount}> Up to <span className={styles.percent}> 25% </span> discount </h1>

        </div>

        <div classsName={styles.secondpath}>

          <img src={shopping} className={styles.cartImage} alt="cartImage" />

        </div>

      </div>





    </>


  );

};

export default Header;
