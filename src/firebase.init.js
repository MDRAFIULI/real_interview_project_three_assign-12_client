// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxovljjZfYoT56VLeNNuGrFQmmHkCJI7g",
    authDomain: "assignment-tweleve.firebaseapp.com",
    projectId: "assignment-tweleve",
    storageBucket: "assignment-tweleve.appspot.com",
    messagingSenderId: "666340578435",
    appId: "1:666340578435:web:6b43c2a0fb155b242bb7b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;