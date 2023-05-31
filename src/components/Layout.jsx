import React from "react";
import Header from "./Header";
import Products from "./Products";
import styles from "./Layout.module.css";
// import CartItems from "./CartItems";
// import { useSelector } from "react-redux";



const Layout = () => {


  return (

    <React.Fragment>
      <div className={styles.flex}>

        <div className={styles.layout}>
          <Header />
          <Products />

        </div>

        <div className={styles.footer}>

          <p className={styles.footerText}>@ 2023 farbcart</p>
          <p className={styles.footerText}>All rights reserved</p>

        </div>

      </div>

    </React.Fragment>
  );
};

export default Layout;
