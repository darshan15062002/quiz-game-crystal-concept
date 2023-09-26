
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAJ_sqj9JEdghcg6e32WBERDtDxTabfDQ8",
    authDomain: "darshan-chatgpt-clone.firebaseapp.com",
    projectId: "darshan-chatgpt-clone",
    storageBucket: "darshan-chatgpt-clone.appspot.com",
    messagingSenderId: "1049241835752",
    appId: "1:1049241835752:web:1266010766467ae18e915d"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
// export const storage = getStorage()
export const db = getFirestore()