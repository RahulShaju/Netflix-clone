// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLPk7Q6ggidGS5cGshLAZLqzhF_TBLjTg",
  authDomain: "netflix-gpt-9d195.firebaseapp.com",
  projectId: "netflix-gpt-9d195",
  storageBucket: "netflix-gpt-9d195.appspot.com",
  messagingSenderId: "101140531317",
  appId: "1:101140531317:web:13615ea545c087323a903c",
  measurementId: "G-E66FRWRT6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);