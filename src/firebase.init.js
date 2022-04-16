// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOb3nKYPN9_oOa1XP5zeTpzJrYn8b-VVk",
    authDomain: "arif-wild-photography.firebaseapp.com",
    projectId: "arif-wild-photography",
    storageBucket: "arif-wild-photography.appspot.com",
    messagingSenderId: "1044444228102",
    appId: "1:1044444228102:web:45ced1e233cafba757b187"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;