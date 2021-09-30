import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const config = {
    apiKey: "AIzaSyAtG1tpfJCDjZeO0zcIrrk4H4rqldaEzlI",
    authDomain: "crown-c.firebaseapp.com",
    projectId: "crown-c",
    storageBucket: "crown-c.appspot.com",
    messagingSenderId: "620552036368",
    appId: "1:620552036368:web:5fd1ab8318729c2476aa95",
    measurementId: "G-ZJYBXRJVJZ"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
