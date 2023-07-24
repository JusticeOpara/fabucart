import React from "react";
import styles from "./App.module.css";
import Layout from "./components/Layout";
import { Routes, Route } from 'react-router-dom'
import CartItems from "./components/CartItems";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import SignUp from "./pages/SiginUp";
import { useState, useEffect } from "react"
import FadeLoader from "react-spinners/MoonLoader"
function App() {

  const { IsOpen, contentType } = useSelector((state) => state.modal)
  const [ifLoading, setIfLoading] = useState(false)

  useEffect(() => {
    // Simulate a 2-second delay
    const loadingTimer = setTimeout(() => {
      setIfLoading(true);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (

    <div className={styles.App}>

      {IsOpen && contentType === 'login' && <Login />}
      {IsOpen && contentType === 'signup' && <SignUp />}


      {ifLoading ?
        <Routes>

          <Route path='' element={<Layout />} />

          <Route path='/cartItems' element={<CartItems />} />

        </Routes> : 
        
        <div className={styles.loadingPage}>
          <FadeLoader speedMultiplier="1" size={50} color='green' className='' />
          <p  className={styles.loading}> loading... </p>
        </div>

      }



    </div>

  );
}

export default App;
