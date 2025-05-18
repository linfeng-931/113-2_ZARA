import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

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

//用戶資料連線(id, password, email)
const auth = getAuth(app);
const analytics = getAnalytics(app);

//詳細資料連線(購物紀錄、喜歡、點數、優惠卷)
const db = getFirestore(app);

export {app, auth, analytics, db};