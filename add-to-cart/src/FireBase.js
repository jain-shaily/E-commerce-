import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhoOO6W5AbpX-aQiS6pBH1b1CPkc-5EvM",
  authDomain: "react-ecommerce-8d063.firebaseapp.com",
  projectId: "react-ecommerce-8d063",
  storageBucket: "react-ecommerce-8d063.firebasestorage.app",
  messagingSenderId: "685856992814",
  appId: "1:685856992814:web:9a5cd48d29955e546139bf",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

