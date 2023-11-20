
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyA7O6UtIdmTc6Q29rUHcN53tVDzZCHIUWA",
    authDomain: "crystal-concept-a928f.firebaseapp.com",
    projectId: "crystal-concept-a928f",
    storageBucket: "crystal-concept-a928f.appspot.com",
    messagingSenderId: "54442974733",
    appId: "1:54442974733:web:226058730ee28ee7a03f44",
    measurementId: "G-591RCC9S1K"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
// export const storage = getStorage()
export const db = getFirestore()