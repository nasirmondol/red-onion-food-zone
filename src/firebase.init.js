// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBN9mXZEYxb7IalOxNBVg3cTcWAbmWvjr0",
    authDomain: "red-onion-food-zone.firebaseapp.com",
    projectId: "red-onion-food-zone",
    storageBucket: "red-onion-food-zone.appspot.com",
    messagingSenderId: "700494807611",
    appId: "1:700494807611:web:ccf703e946ee4b8763921e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;