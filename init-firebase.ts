// Import the functions you need from the SDKs you need
import { initializeApp, getApp  } from "firebase/app";
import firebase from "firebase/app";
import {getAuth,signInWithPopup} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALWR0C_lI_VDjQAH6RXUpFhdsoJkvpxVI",
  authDomain: "bigmerchant-sites.firebaseapp.com",
  projectId: "bigmerchant-sites",
  storageBucket: "bigmerchant-sites.appspot.com",
  messagingSenderId: "344923427768",
  appId: "1:344923427768:web:30f5bbfe9fc70afbe9b54d",
  measurementId: "G-LJZMG6T2GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
