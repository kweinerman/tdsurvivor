// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDatabase, ref, set, onValue } from 'firebase/database';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCLIv3cW6p-0lqyrcqoeOEp48NNOwZUnE",
  authDomain: "touchdown-scorer.firebaseapp.com",
  projectId: "touchdown-scorer",
  storageBucket: "touchdown-scorer.appspot.com",
  messagingSenderId: "539238756743",
  appId: "1:539238756743:web:1e93b22019985f4ad86322",
  measurementId: "G-M6PV575W13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { database, ref, set, onValue, auth };