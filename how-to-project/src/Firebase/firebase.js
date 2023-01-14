import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBD-e6w3-eKyVYFZ0P7S_F2vCsd3qqDf60",
  authDomain: "pollux-39804.firebaseapp.com",
  projectId: "pollux-39804",
  storageBucket: "pollux-39804.appspot.com",
  messagingSenderId: "315704531556",
  appId: "1:315704531556:web:a250db402210940a5d9d71",
  measurementId: "G-RCE4CRL3JK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);
export const storage= getStorage(app);