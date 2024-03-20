import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyChqlQV74UKoONmjMwMot3gT37ewaFGPmY",
    authDomain: "studentdomain-e5d04.firebaseapp.com",
    databaseURL: "https://studentdomain-e5d04-default-rtdb.firebaseio.com",
    projectId: "studentdomain-e5d04",
    storageBucket: "studentdomain-e5d04.appspot.com",
    messagingSenderId: "513745337316",
    appId: "1:513745337316:web:73923e2c056602bd11e5f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


let signUpButton = document.getElementById('signUp')
signUpButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault();
    console.log("clicked");

    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    alert('account successfully created');
    
    const user = userCredential.user;
    console.log('user', user.email);
    window.location.href = 'homepage.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
    
  });
})