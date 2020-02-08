 import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNY9509DSuuagT-SHpHVeqSSMedToWZ7g",
    authDomain: "crwn-f8380.firebaseapp.com",
    databaseURL: "https://crwn-f8380.firebaseio.com",
    projectId: "crwn-f8380",
    storageBucket: "crwn-f8380.appspot.com",
    messagingSenderId: "762941553343",
    appId: "1:762941553343:web:cce4c905891b583054240a",
    measurementId: "G-FCKQLJMW4X"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
         const { displayName, email } = userAuth;
         const createdAt = new Date();
         try {
             await userRef.set({
                 displayName,
                 email,
                 createdAt,
                 ...additionalData
             })
         } catch (error) {
             console.error(error)
         }
    }
    return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;