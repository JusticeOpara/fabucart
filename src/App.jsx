import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cart from "./components/Cart";
import Notification from "./components/Notification";
import { uiActions } from "./store/userinterface-slice";
import { Routes, Route } from 'react-router-dom'
import CartItems from "./components/CartItems";



let firstRender = true

function App() {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const notification = useSelector((state) => state.ui.notification);
  const IsLoggedIn = useSelector((state) => state.auth.IsLoggedIn)
  console.log(IsLoggedIn, "--I Don Log am in")

  // const cartItems = useSelector((state) => state.cart.itemsList)
  // console.log(cartItems, "--cartItems")
  const showCart = useSelector((state) => state.cart.showCart)
  console.log(showCart, "--SHOWCART")

  useEffect(() => {

    if (!firstRender) {
      firstRender = false
      return
    }

    const sendRequest = async () => {
      //send state as Sending request
      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending Request ",
        type: "warning",
      }))

      const res = await fetch(`https://redux-store-c9725-default-rtdb.firebaseio.com/cartItems.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        })
      const data = await res.json()
      // return data
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending Request To Database!",
          type: "success",
        }))
    }
    sendRequest().catch(err => dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request Failed",
        type: "error",
      })
    ))
    // send state as sucessful



  }, [Cart])

  return (
    <div className="App">
      {/* //   {notification && (
    //     <Notification type={notification.type} message={notification.message} />
    //   )}

    //   {!IsLoggedIn && <Auth />}
    //   {IsLoggedIn && <Layout />}
    //   {showCart && <CartItems />} */}
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
