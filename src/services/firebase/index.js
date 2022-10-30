import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA1Pu0Qu-oevTWAbXzZSHrQaCLFpbqkBcQ",
  authDomain: "proyectofinal-trovatoelian.firebaseapp.com",
  projectId: "proyectofinal-trovatoelian",
  storageBucket: "proyectofinal-trovatoelian.appspot.com",
  messagingSenderId: "436223030101",
  appId: "1:436223030101:web:2a8567162144fcf9fa35dc",
  measurementId: "G-W6XJBVWKQ3"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)