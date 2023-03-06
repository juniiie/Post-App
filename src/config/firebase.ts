// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Ro3btm2WVbl27-no3UsVThSoNC1W2Jo",
  authDomain: "react-firebase-d6cfc.firebaseapp.com",
  projectId: "react-firebase-d6cfc",
  storageBucket: "react-firebase-d6cfc.appspot.com",
  messagingSenderId: "642272296814",
  appId: "1:642272296814:web:fc917e961df23b0d6c8b7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth has all the information of person logged in
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
