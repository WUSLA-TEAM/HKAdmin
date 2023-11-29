import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC767RKGjr2-E9uUpBs5XTykQkoBSx1pYU",
  authDomain: "learningappwork.firebaseapp.com",
  databaseURL:
    "https://learningappwork-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "learningappwork",
  storageBucket: "learningappwork.appspot.com",
  messagingSenderId: "744773797539",
  appId: "1:744773797539:web:df3c80f69dea89c3312116",
  measurementId: "G-BG10JR3RLP",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  firestore,
  storage,
};
