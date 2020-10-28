import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB08Z4YmkDbAupl4JWUxHjjWlXsNUC0a_Q",
  authDomain: "clone-7feb5.firebaseapp.com",
  databaseURL: "https://clone-7feb5.firebaseio.com",
  projectId: "clone-7feb5",
  storageBucket: "clone-7feb5.appspot.com",
  messagingSenderId: "133744156657",
  appId: "1:133744156657:web:2366356eca7fb8dab42e50",
  measurementId: "G-NZ6GDB7P9X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
