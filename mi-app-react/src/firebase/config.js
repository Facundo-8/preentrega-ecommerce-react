import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsk7KaXVi8WUYZk4eeZh8hJGP7MZK9a_A",
  authDomain: "ecommerce-zapatillas1.firebaseapp.com",
  projectId: "ecommerce-zapatillas1",
  storageBucket: "ecommerce-zapatillas1.firebasestorage.app",
  messagingSenderId: "352818941409",
  appId: "1:352818941409:web:7ccd12a9602339c4c9d6a0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
