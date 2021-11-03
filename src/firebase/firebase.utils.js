import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDEbZkxrkfWWCf47lKvWBYRjtklzPONjCE",
    authDomain: "crwn-db-b26ef.firebaseapp.com",
    projectId: "crwn-db-b26ef",
    storageBucket: "crwn-db-b26ef.appspot.com",
    messagingSenderId: "418181210040",
    appId: "1:418181210040:web:f9a5929086c16cbed9f94d",
    measurementId: "G-P1KDJFKZ0P"
};


export const createUserProfileDocuments = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch(error) {
            console.log('Error creating user : ', error.message);
        }
    }
    
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;