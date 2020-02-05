 import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD6y1pvJRM20eHb5m2gSa_hFOGVPB38YhI",
    authDomain: "crwn-db-24d8c.firebaseapp.com",
    databaseURL: "https://crwn-db-24d8c.firebaseio.com",
    projectId: "crwn-db-24d8c",
    storageBucket: "crwn-db-24d8c.appspot.com",
    messagingSenderId: "536740298705",
    appId: "1:536740298705:web:9ddf61a9112ef1e86daaf0",
    measurementId: "G-LJTJVQ5RYV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;