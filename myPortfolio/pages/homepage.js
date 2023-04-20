document.getElementById("submit").addEventListener(
  "click",
  function () {
    alert("Success!");
  },
  false
);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1Zd2fc1cWOwZ_WiQs9pFdU6Y0XKSwpxo",
  authDomain: "nodeapp-1801a.firebaseapp.com",
  databaseURL: "https://nodeapp-1801a-default-rtdb.firebaseio.com",
  projectId: "nodeapp-1801a",
  storageBucket: "nodeapp-1801a.appspot.com",
  messagingSenderId: "1028228763263",
  appId: "1:1028228763263:web:2a952ff875573f30a8f94a",
  measurementId: "G-H9HE39LZH8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
