// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwQ96Tv8n1YYMqOeEKNvYNmkAavCykTA8",
  authDomain: "logika-warehouse.firebaseapp.com",
  projectId: "logika-warehouse",
  storageBucket: "logika-warehouse.appspot.com",
  messagingSenderId: "695710377574",
  appId: "1:695710377574:web:97e4ba877ca1c6207b2fa7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
