import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAMhgFY4mDTTShGOWQr24w1aKFXhw_zsAI",
  authDomain: "react-notes-25031.firebaseapp.com",
  projectId: "react-notes-25031",
  storageBucket: "react-notes-25031.appspot.com",
  messagingSenderId: "1089467031883",
  appId: "1:1089467031883:web:c2aefce5ec6f9d2bc948ce"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, 'notes')