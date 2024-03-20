import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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


let logOut = document.getElementById('logoutbtn');

const signOutButtonPressed = async(e) => {
    e.preventDefault();
    try {
        await signOut(auth);
        alert("User Signed Out Successfully!");
        window.location.href = 'index.html';
      } catch (error) {
        console.log(error.code);
      }
};

logOut.addEventListener("click", signOutButtonPressed);

