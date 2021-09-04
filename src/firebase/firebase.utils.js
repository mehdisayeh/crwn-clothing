import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEbZkxrkfWWCf47lKvWBYRjtklzPONjCE",
    authDomain: "crwn-db-b26ef.firebaseapp.com",
    projectId: "crwn-db-b26ef",
    storageBucket: "crwn-db-b26ef.appspot.com",
    messagingSenderId: "418181210040",
    appId: "1:418181210040:web:f9a5929086c16cbed9f94d",
    measurementId: "G-P1KDJFKZ0P"
  };
 
// Initialize Firebase
initializeApp(firebaseConfig);
 
export const auth = getAuth();
export const firestore = getFirestore();
 
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);