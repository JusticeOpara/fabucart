import React from "react"
import { Formik, Form, Field, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import styles from "./styles.module.css"
import { signup } from "../firebase"
import { connectFirestoreEmulator } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { modalActions } from "../store/modal-slice"

const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    radioOption: Yup.string().required('Please select an option')
});


export default function SignUp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClosexModal = () => {
        dispatch(modalActions.closeModal())
    }


    const handleSignup = async (values) => {

        try {

            const signupContent = await signup(values.email, values.password, values.username );
            console.log(signupContent, "SIGNUPCONTENT")
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
                    username: '',
                    email: '',
                    password: '',
                    radio: '',
                }}

                validationSchema={DisplayingErrorMessagesSchema}

                onSubmit={handleSignup}

            >


                {({ errors, touched, isValid, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
                    // console.log(errors, "---errors")



                    return <Form className={styles.form} onSubmit={handleSubmit}  >


                         <header > 
                            <div className={styles.closeBox}>
                                <span onClick={handleClosexModal} className={styles.cancelIcon}> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#2f9b77" stroke-linecap="round" stroke-linejoin="round" 
                                stroke-width="1.5" d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"/></svg>
                                 </span>
                            </div>

                        </header> 

                        <h1 className={styles.heroTag}>REGISTER</h1>

                        <div>
                            <fieldset>
                                <legend>Name</legend>
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="What's your name?"
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />

                            </fieldset>
                            {touched.username && errors.username && <div className={styles.error}>{errors.username}</div>}
                        </div>


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

                            {touched.email && errors.email && <div className={styles.error}>{errors.email}</div>}

                        </div>


                        <div>
                            <fieldset>
                                <legend>Password</legend>
                                <input type="password"
                                    name="password"
                                    placeholder="**********"
                                    onBlur={handleBlur}
                                    onChange={handleChange}

                                />
                            </fieldset>

                            {touched.password && errors.password && <div className={styles.error}>{errors.password}</div>}
                        </div>



                        <div>
                            <fieldset >
                                <legend>Confirm Password</legend>
                                <input type="password"
                                    name="password"
                                    placeholder="***********"
                                    onBlur={handleBlur}
                                    onChange={handleChange}

                                />

                            </fieldset>
                            {touched.password && errors.password && <div className={styles.error}>{errors.password}</div>}
                        </div>




                        <fieldset className={styles.genderField}>

                            <legend>Gender:</legend>

                            <div className={styles.radioContainer}>
                                <label htmlFor="radio-male" className={styles.radio}>

                                    <Field type="radio"
                                        name="radioOption"
                                        value="male"
                                        
                                    />

                                    <span className="h-[26px] w-[26px] border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] radio-btn"></span>
                                    <span>Male</span>
                                </label>

                                <label htmlFor="radio-female" className={styles.radio}>
                                    <Field type="radio"
                                        name="radioOption"
                                        value="female"
                                         />

                                    <span className="h-[26px] w-[26px] border-2 border-primary p-[4px] bg-[#fff] block rounded-[50%] radio-btn"></span>
                                    <span>Female</span>
                                </label>
                            </div>
                        </fieldset>


                        <p style={{color:"#2f9b77"}}>Have you read and agree to the terms </p>

                        <button className={styles.authBtn} type="submit" disabled={!isValid}
                            style={{ backgroundColor: !isValid ? 'gray' : '#2f9b77' }}>

                            {isSubmitting ? 'Creating account..' : 'Sign up'}

                        </button>



                    </Form>

                }}
            </Formik>
        </div>
    )
}