// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSFyy0jQPv5c_qElszJZvaBYTVFYk8G4E",
    authDomain: "chatapp-cda92.firebaseapp.com",
    projectId: "chatapp-cda92",
    storageBucket: "chatapp-cda92.appspot.com",
    messagingSenderId: "593878839583",
    appId: "1:593878839583:web:c3cadccb39e70b06e1002a"
};

// Initialize Firebase
const dbapp = initializeApp(firebaseConfig);

export default dbapp;