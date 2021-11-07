import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB2hurwP-K_B6Hgd7p3v9QC76lStLgcfBE",
  authDomain: "react-328602.firebaseapp.com",
  projectId: "react-328602",
  storageBucket: "react-328602.appspot.com",
  messagingSenderId: "350081354465",
  appId: "1:350081354465:web:3295102f2930564be9c5a0",
  measurementId: "G-446LGRSSE5"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();