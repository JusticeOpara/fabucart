import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Auth.module.css";
import { authActions } from "../store/auth-slice";

const Auth = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {

    e.preventDefault()
    dispatch(authActions.loggedIn())

  }
  

  return (
    <div className={styles.container}>
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="id">Id</label>
        <input type="text" name="id" id="id" className={styles.input}/>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input type="password" name="password" id="password" className={styles.input} />
        <button className={styles.loginBtn}type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
