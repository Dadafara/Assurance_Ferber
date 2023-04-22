import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0G3PfftJKnz0HOJEoVQqWyK6uHPY6vNA",
  authDomain: "back-assurance.firebaseapp.com",
  projectId: "back-assurance",
  storageBucket: "back-assurance.appspot.com",
  messagingSenderId: "642457198367",
  appId: "1:642457198367:web:e030aed4001f5240061a2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); 