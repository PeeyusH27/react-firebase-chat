// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-67bdf.firebaseapp.com",
  projectId: "reactchatapp-67bdf",
  storageBucket: "reactchatapp-67bdf.appspot.com",
  messagingSenderId: "559352657192",
  appId: "1:559352657192:web:cc5f55aa8f55cc16220c1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()