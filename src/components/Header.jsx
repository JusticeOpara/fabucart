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
    // <header>
    //   <nav className="header-nav">
    //     <ul className="header-ul">
    //       <li>
    //         <h2
    //           className="header-h2"
    //           style={{ fontFamily: "monospace", fontSize: "30px" }}
    //         >
    //           Redux Shopping App
    //         </h2>
    //       </li>
    //       <li>
    //        
    //       </li>
    //       <li>
    //         <button onClick={handleLogout} className="logout-btn">
    //           Logout
    //         </button>{" "}
    //       </li>
    //     </ul>
    //   </nav>
    // </header>

    <>
      <nav className={styles.navbar}>
        <div>
          <img src={cartlogo} className={styles.cartlogo} alt="logo" />
          <p>Fabucart</p>

        </div>
        
          <Cart />
          {/* <img src={cart} className="cartlogo" alt="logo" /> */}

      </nav>
      <div className={styles.header}>

        <div className={styles.firstpath}>

          <h1 className="">

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
