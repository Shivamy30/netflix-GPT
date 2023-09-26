// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO6ag2VSl-Tjw2bElt6q2J4O0rfYL-i4k",
  authDomain: "netflixgpt-s.firebaseapp.com",
  projectId: "netflixgpt-s",
  storageBucket: "netflixgpt-s.appspot.com",
  messagingSenderId: "471087318677",
  appId: "1:471087318677:web:a8a30c8c418148f3c53d9c",
  measurementId: "G-3FMS8JXN9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//we are importing auth here because it requires in every firebase call 
export const auth = getAuth();