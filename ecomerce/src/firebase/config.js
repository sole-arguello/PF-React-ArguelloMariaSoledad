// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeUzppeK6HP9hqYSbFeJUAVGh0cC07EB8",
  authDomain: "ecommerce-react-8ae98.firebaseapp.com",
  projectId: "ecommerce-react-8ae98",
  storageBucket: "ecommerce-react-8ae98.appspot.com",
  messagingSenderId: "905358020930",
  appId: "1:905358020930:web:f04b8ad8a3dd5908c838db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app