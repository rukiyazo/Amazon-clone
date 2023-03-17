// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdDk-ixIf2vFzitXu_hw_-R-IqLIgKbL0",
  authDomain: "app-19d03.firebaseapp.com",
  projectId: "app-19d03",
  storageBucket: "app-19d03.appspot.com",
  messagingSenderId: "109165390423",
  appId: "1:109165390423:web:08a36e825b3e6fe8291112",
  measurementId: "G-FQ2FJXJQQX",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
// const auth = getAuth(app);

export { db, auth };
