// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5SiFf2uxndOVyd982BhH91On0meskD7g",
  authDomain: "aurum-17031.firebaseapp.com",
  projectId: "aurum-17031",
  storageBucket: "aurum-17031.firebasestorage.app",
  messagingSenderId: "631679544599",
  appId: "1:631679544599:web:adf184fe55b9ebcc825b52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
