// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCDlM8AlEw8Vdgtgn9k2fXCqIe2vzJb2DI",
    authDomain: "proyectofinal-sistemasdeinfo.firebaseapp.com",
    projectId: "proyectofinal-sistemasdeinfo",
    storageBucket: "proyectofinal-sistemasdeinfo.firebasestorage.app",
    messagingSenderId: "102396516511",
    appId: "1:102396516511:web:7e1cf861e5b0750d67eaaa",
    measurementId: "G-TFN4QTKVNS"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
