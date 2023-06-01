import React from "react";
import styles from "./App.module.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart";
import Notification from "./components/Notification";
import { uiActions } from "./store/userinterface-slice";
import { Routes, Route } from 'react-router-dom'
import CartItems from "./components/CartItems";
// import { sendCartData } from "./store/cart-slice";



let firstRender = true

function App() {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const notification = useSelector((state) => state.ui.notification);
  const IsLoggedIn = useSelector((state) => state.auth.IsLoggedIn)
  console.log(IsLoggedIn, "--I Don Log am in")

  
  const showCart = useSelector((state) => state.cart.showCart)
  console.log(showCart, "--SHOWCART")

  
  return (
    <div className={styles.App}>

      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}

      <Routes>

        {!IsLoggedIn && <Route path='*' element={<Auth />} />}
        {IsLoggedIn && <Route path='/' element={<Layout />} />}
        {showCart && <Route path='/cartItems' element={<CartItems />} />}

      </Routes>

     
    </div>

  );
}

export default App;
