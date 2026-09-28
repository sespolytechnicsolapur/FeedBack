// firebase-config.js

// 1. Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// 2. Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChnA934owznPeliDnYlCiXZ07hdjVeKSk",
  authDomain: "forms-1d8e0.firebaseapp.com",
  projectId: "forms-1d8e0",
  storageBucket: "forms-1d8e0.firebasestorage.app",
  messagingSenderId: "709550874827",
  appId: "1:709550874827:web:38c45396f87be018bc3b4e",
  measurementId: "G-E3R0BCC97Z"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export instances and modular functions to be used across the app
export {
  auth,
  db,
  signInAnonymously,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy
};
