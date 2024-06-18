// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebase/10.7.2/firebase-auth.js";
// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyB28LigNWofXx5OKdssO9xgQOUERt4vjRs",
  authDomain: "login-example-f2195.firebaseapp.com",
  projectId: "login-example-f2195",
  storageBucket: "login-example-f2195.appspot.com",
  messagingSenderId: "164883846164",
  appId: "1:164883846164:web:7c329d57dc7eda496fc301"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()

  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Logging In...")
      window.location.href = "../";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
});
