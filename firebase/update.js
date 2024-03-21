import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

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
  
  const user = auth.currentUser;

  function updateUserProfile(user){
    const username = user.displayName;
    const userEmail = user.email;
    const userInitial = userEmail.substring(0, 1);
    const userProfilePicture = user.photoURL;

    document.getElementById('userName').textContent = username;
    document.getElementById('userEmail').textContent = userEmail;
    if(!userProfilePicture){
      document.querySelector('.userInitial').textContent = userInitial;
    } else {
      document.getElementById('userProfilePicture').src = userProfilePicture;
      document.getElementById('userProfilePicture').style.display = 'block';
      document.querySelector('.userInitial').style.display = 'none';
    }

  }

 onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    } else {
        window.location.href = 'index.html';
    }
});

