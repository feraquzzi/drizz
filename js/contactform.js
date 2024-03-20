import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

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
const database = getDatabase(app);

// Reference messages collection
var messagesRef = ref(database, '/messages'); 



// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var fullname = getInputVal('fullname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(fullname, email, phone, message);

  // Show alert
  //alert('Sent succesfully, Drizz will get back to you shortly');
  //document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  //setTimeout(function(){
   // document.querySelector('.alert').style.display = 'none';
  //},3000);

  // Clear form
  document.getElementById('contact-form').reset();
  //console.log('hello')
}




// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fullname, email, phone, message){
  var newMessageRef = push(messagesRef);
  set(newMessageRef, {
    fullname: fullname,
    email: email,
    phone: phone,
    message: message
  });
}

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);