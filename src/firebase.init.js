// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSlcGdFdzdcVCPlx-p2eUyKyYYIWTGW0c",
  authDomain: "multicart-baa75.firebaseapp.com",
  projectId: "multicart-baa75",
  storageBucket: "multicart-baa75.appspot.com",
  messagingSenderId: "938820771667",
  appId: "1:938820771667:web:f2b568ebe082e77a05cba6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
