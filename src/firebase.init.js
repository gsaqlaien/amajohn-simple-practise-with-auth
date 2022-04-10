// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOKQZIDYun6oCQMlU5p0mPG3YzLtvMpS0",
    authDomain: "emajohn-simple-e936c.firebaseapp.com",
    projectId: "emajohn-simple-e936c",
    storageBucket: "emajohn-simple-e936c.appspot.com",
    messagingSenderId: "875243275446",
    appId: "1:875243275446:web:b3a8b8ffb9f9b40b5c1217"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
