import React from "react";
import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { signIn } from "../firebase";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { modalActions } from "../store/modal-slice"
import { useDispatch } from "react-redux";




const DisplayingErrorMessagesSchema = Yup.object().shape({
    password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    email: Yup.string().email('Invalid email')
        .required('Required'),
});

export default function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleCloseModal = () => {
        dispatch(modalActions.closeModal())
    }

    const handleSignIn = async (values) => {
        try {

            await signIn(values.email, values.password);

            navigate('/');

        } catch (error) {

            toast.error("Error: " + error.message, {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log(error, "-TOASTERROR")

        }
    }



    return (
        <div className={styles.container}>
            <ToastContainer />

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={handleSignIn}
            >
                {({ errors, touched, isValid, handleBlur, handleChange, isSubmitting }) => (

                    <Form className={styles.form}>
                    
                        <header > 
                            <div className={styles.closeBox}>
                                <span onClick={handleCloseModal} className={styles.cancelIcon}> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#2f9b77" stroke-linecap="round" stroke-linejoin="round" 
                                stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/></svg>
                                 </span>
                            </div>

                        </header> 

                        <h1 className={styles.heroTag}>Login</h1>


                        <div>
                            <fieldset className={styles.fieldset}>

                                <legend>Email</legend>

                                <input
                                    type="email"
                                    name="email"
                                    label="Email"
                                    placeholder="example@gmail.com"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />

                            </fieldset>
                            {/* If this field has been touched, and it contains an error, display it */}

                            {touched.email && errors.email && <div className={styles.error}>{errors.email}</div>}

                        </div>


                        <div>
                            <fieldset className={styles.fieldset}>

                                <legend>Password</legend>

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="**********"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />

                            </fieldset>
                            {/* If this field has been touched, and it contains an error, display it*/}

                            {touched.password && errors.password && <div className={styles.error}>{errors.password}</div>}


                        </div>





                        <div className={styles.alignText}>

                            <div className={styles.checker}>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19 19H5V5h10V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 
                                    2-2v-8h-2m-11.09-.92L6.5 11.5L11 16L21 6l-1.41-1.42L11 13.17l-3.09-3.09Z" /></svg>
                                <a>
                                    Rememeber Me
                                </a>

                            </div>


                            <a> <Link to="/auth/forgot-password" style={{color:"#2f9b77"}}>Forgotten password?</Link></a>

                        </div>



                        <button className={styles.authBtn} type="submit" disabled={console.log(!isValid, "not valid")}
                            style={{ backgroundColor: !isValid ? 'gray' : '#2f9b77' }}
                        >  {isSubmitting ? 'Signing In..' : 'Sign in'}</button>



                        <p className={styles.xlll}>Don't have an account? <Link to="/auth/signup" style={{color:"#2f9b77"}}>Register  </Link> </p>

                    </Form>
                )}
            </Formik>
        </div>
    )
}