// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDAoGGoMsNDdmQvFIHW55UK5RrtgP9XKA",
  authDomain: "react-cursos-4fef4.firebaseapp.com",
  projectId: "react-cursos-4fef4",
  storageBucket: "react-cursos-4fef4.appspot.com",
  messagingSenderId: "581508928169",
  appId: "1:581508928169:web:7bacbc3d3a5bae8f238fb8",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
