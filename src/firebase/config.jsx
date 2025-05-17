import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDApLiYFXlqmBzXO0fZ-E_rMhLFJ2fHc8",
  authDomain: "zara-8c2b7.firebaseapp.com",
  projectId: "zara-8c2b7",
  storageBucket: "zara-8c2b7.firebasestorage.app",
  messagingSenderId: "742486798317",
  appId: "1:742486798317:web:ecd2170a6c52452b31c1e4",
  measurementId: "G-ZSBE2YDJQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export {app, auth, analytics};