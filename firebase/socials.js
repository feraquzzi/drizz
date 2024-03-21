import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();

  const googleLogin = document.getElementById('googleLoginBtn');
  googleLogin.addEventListener('click', function(){
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window.location.href = 'homepage.html';

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    })
  })

 
 