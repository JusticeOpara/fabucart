import React from "react";
import Header from "./Header";
import Products from "./Products";
import styles from "./Layout.module.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";



const Layout = () => {
  let total = 0;
  const itemList = useSelector(state => state.cart.itemsList)
  itemList.forEach((item) => {
    total += item.totalPrice;
  });

  const showCart = useSelector((state) => state.cart.showCart)
  console.log(showCart, "--SHOWCART")

  return (
    
    <React.Fragment>
      <div className={styles.flex}>

        <div className={styles.layout}>
          <Header />
          <Products />
          {showCart && <CartItems />}
          <div className={styles.totalPrice}>
            <h3>Total: ${total}</h3>

            <button className={styles.orderBtn}>Place Order</button>
          </div>
        </div>

      </div>

    </React.Fragment>
  );
};

export default Layout;
