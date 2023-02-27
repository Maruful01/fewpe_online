// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd_z9dJ10E8yIbaILlNLqFah_Gh9fwl5Q",
  authDomain: "logyzone-4c4cb.firebaseapp.com",
  projectId: "logyzone-4c4cb",
  storageBucket: "logyzone-4c4cb.appspot.com",
  messagingSenderId: "485175852451",
  appId: "1:485175852451:web:849b5c331edecff8006e16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);