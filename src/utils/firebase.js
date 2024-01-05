// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "blogapp-d382d.firebaseapp.com",
    projectId: "blogapp-d382d",
    storageBucket: "blogapp-d382d.appspot.com",
    messagingSenderId: "762329372416",
    appId: "1:762329372416:web:0fd333b7b662e196abc5e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);