import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuQIfQcfcxCav-Z9BnlId29XHXhOZOXE8",
  authDomain: "social-app-640ba.firebaseapp.com",
  projectId: "social-app-640ba",
  storageBucket: "social-app-640ba.firebasestorage.app",
  messagingSenderId: "377906490228",
  appId: "1:377906490228:web:3a146af5eee89f7e705a21",
  measurementId: "G-GSZMWXGZM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services after Firebase app
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);  