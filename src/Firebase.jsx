import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import ReactObserver from 'react-event-observer';
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { signInWithEmailAndPassword } from "firebase/auth"
// import { sendPasswordResetEmail } from "firebase/auth"




const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,


};

//  const storage = getStorage(app, "gs://my-custom-bucket")
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export const firebaseObserver = ReactObserver();

onAuthStateChanged(auth, (user) => {

  firebaseObserver.publish("authStateChanged", loggedIn())

});

export function loggedIn() {
  return !!auth.currentUser;
}
console.log(loggedIn, "--loggedin")

export const signIn = async (email, password, username) => {

  try {

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
      username
    );
    // console.log(userCredential, "--UserCredential")

    const user = userCredential.user;
    // console.log(user, "--user")

    return true
  } catch (error) {

    if (window.error.code === 'auth/wrong-password' || 'auth/wrong-email') {

      console.log('Incorrect password. Please try again.');

    } else {
      console.log(error);
    }

  }
};


export const signup = async (email, password, username) => {

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,

    );

    // console.log(userCredential, "--Credential")

    const user = userCredential.user;

    // console.log(user, "--USER")

    try {
      const userDocRef = doc(db, "users", user.uid);

      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        username: username
      });


    } catch (e) {

      console.error("Error adding document: ", e);
    }

  } catch (error) {
    console.log(error, "--ERRORCODE-SIGNUP")
    const errorCode = error.code;
    console.log(errorCode, "--errorCode")

    const errorMessage = error.message;
    console.log(errorMessage, "--errorMessage");
  }

}

export const forgotPassword = async (auth, email) => {
  try {
    const userCredential = await sendPasswordResetEmail(
      auth,
      email
    );
    // console.log(userCredential, "--UserCredential")

  } catch (error) {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
  }
}

