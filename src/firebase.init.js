// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjT8XT7a7qByrsVbe-VhYP81nvT5BNKwo",
  authDomain: "ema-jhon-project-7b6be.firebaseapp.com",
  projectId: "ema-jhon-project-7b6be",
  storageBucket: "ema-jhon-project-7b6be.appspot.com",
  messagingSenderId: "507408345106",
  appId: "1:507408345106:web:fef4f38b6056817c2390cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;