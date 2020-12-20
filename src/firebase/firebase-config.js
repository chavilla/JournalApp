import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBIsf_HUj74q7ydQdMXYO6vIj8QI8MUrVA",
    authDomain: "journalapp-react-8ca84.firebaseapp.com",
    projectId: "journalapp-react-8ca84",
    storageBucket: "journalapp-react-8ca84.appspot.com",
    messagingSenderId: "107225558524",
    appId: "1:107225558524:web:3454aced4dbe9a9e039679"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// auth with google instance
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}