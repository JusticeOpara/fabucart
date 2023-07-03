import React from "react";
import styles from "./App.module.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom'
import CartItems from "./components/CartItems";
import Login from "./pages/Login";
import { useSelector} from "react-redux";
import SignUp from "./pages/SiginUp";


function App() {

const {IsOpen,contentType} =  useSelector((state)=>state.modal)
console.log(contentType,"--contentType")
  // const IsLoggedIn = useSelector((state) => state.auth.IsLoggedIn)
  // console.log(IsLoggedIn, "--I Don Log am in")


  // const showCart = useSelector((state) => state.cart.showCart)
  // console.log(showCart, "--SHOWCART")
 

  return (
    <div className={styles.App}>

      {IsOpen && contentType === 'login' && <Login />}
      {IsOpen && contentType === 'signup' && <SignUp />}
             
      <Routes>

        {/* {!IsLoggedIn && <Route path='*' element={<Auth />} />}
        {IsLoggedIn && <Route path='/' element={<Layout />} />}
        <Route path='/cartItems' element={<CartItems />} /> */}

        <Route path='' element={<Auth />} />

         <Route path='/layout' element={<Layout />} />

        <Route path='/cartItems' element={<CartItems />} />

      </Routes>



    </div>

  );
}

export default App;
