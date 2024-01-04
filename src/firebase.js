// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADD3dbhlQaDi2Z2okFOnnTXHEbtWbJJ74",
  authDomain: "to-do-app-fc13a.firebaseapp.com",
  projectId: "to-do-app-fc13a",
  storageBucket: "to-do-app-fc13a.appspot.com",
  messagingSenderId: "701739112632",
  appId: "1:701739112632:web:2a9f0d597facfae2f8fc4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)