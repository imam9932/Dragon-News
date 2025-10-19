// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkPdM6NiUU2q_Sg6cecOOOzE1uDFbIMVk",
  authDomain: "dragons-news-73237.firebaseapp.com",
  projectId: "dragons-news-73237",
  storageBucket: "dragons-news-73237.firebasestorage.app",
  messagingSenderId: "412635298357",
  appId: "1:412635298357:web:df6c6ec3e4caf945e04f7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)