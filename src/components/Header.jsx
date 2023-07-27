import React from "react";
import Cart from "./Cart";
import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
// import { authActions } from "../store/auth-slice";
import shopping from '../assets/shopping.png';
import cartlogo from '../assets/cartlogo.png';
import { modalActions } from "../store/modal-slice";


// import cart from '../assets/cart.png'
const Header = () => {

  const dispatch = useDispatch()

  // const handleOpenModal = () => {
  //   dispatch(modalActions.openModal())
  // }

  // console.log(handleOpenModal, "----OpenModal")

  const handleOpenLoginModal = () => {
    dispatch(modalActions.setModalContent('login'));
    dispatch(modalActions.openModal());
  };

  const handleOpenSignupModal = () => {
    dispatch(modalActions.setModalContent('signup'));
    dispatch(modalActions.openModal());
  };



  return (

    <>
      <nav className={styles.navbar}>

        <div className={styles.navlogo}>

          <img src={cartlogo} className={styles.cartlogo} alt="logo" />
          <p style={{ fontSize: '20px', color: "white", fontWeight: "bold" }}>Fabucart</p>

        </div>


        <div className={styles.iconContainer}>

          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" onClick={handleOpenLoginModal}>
            <path fill="white" d="M3 6.75A3.75 3.75 0 0 1 6.75 3H9.5v6.5H3V6.75ZM3 11v6h6.5v-6H3Zm0 7.5v2.75A3.75 3.75 0 0 0 6.75 
          25H9.5v-6.5H3Zm8 6.5h2.166l.356-1.423c.162-.648.497-1.24.97-1.712L17 19.356V18.5h-6V25Zm14-14v2.012a3.278 3.278 0 0 0-2.606.95L19.356
           17H18.5v-6H25Zm0-1.5V6.75A3.75 3.75 0 0 0 21.25 3H18.5v6.5H25ZM17 3h-6v6.5h6V3Zm0 8v6h-6v-6h6Zm6.1 3.67l-7.903 7.902a2.686 2.686 0 0 
           0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.685 2.685 0 0 0 1.248-.707l7.902-7.902a2.286 2.286 0 0 0-3.232-3.233Z"/></svg>



          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" onClick={handleOpenSignupModal}>
            <path fill="white" d="M26 30H14a2 2 0 0 1-2-2v-3h2v3h12V4H14v3h-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2Z" />
            <path fill="white" d="M14.59 20.59L18.17 17H4v-2h14.17l-3.58-3.59L16 10l6 6l-6 6l-1.41-1.41z" /></svg>

          <Cart />

        </div>

      </nav>


      <div className={styles.header}>

        <div className={styles.firstpath}>

          <h1 className={styles.headerText}>

            <span className={styles.greetings}> Welcome to </span>

            <span className={styles.brandname}> Fabucart </span>
          </h1>

          <h1 className={styles.brandbold}> Join Us on an Extraordinary Journey, </h1>

          <h2 className={styles.brandtext}> Where Shopping Becomes an Unforgettable Thrill Ride. </h2>

          <h1 className={styles.discount}> We Offer Up to <span className={styles.percent}> 25% </span> discount </h1>

        </div>

        <div classsName={styles.secondpath}>

          <img src={shopping} className={styles.cartImage} alt="cartImage" />

        </div>


      </div>


    </>


  );

};

export default Header;
