//To create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(".main-title, .section-title, .container h1", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal("#feedback", {
  delay: 600,
  origin: "bottom",
});

ScrollReveal().reveal("#navbar", {
  delay: 500,
  origin: "top",
});

var config = {
  apiKey: "AIzaSyAwG7RePlLNiGGfs61BttyXserKakBlq74",
  authDomain: "pfd-asg-1.firebaseapp.com",
  databaseURL: "https://pfd-asg-1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pfd-asg-1",
  storageBucket: "pfd-asg-1.appspot.com",
  messagingSenderId: "683817910117",
  appId: "1:683817910117:web:6bc464138c242c9853eb8c",
  measurementId: "G-PCCLL01552",
};

//Initialize Firebase
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref("Feedback");

//Listen for form submit
document.getElementById("feedback").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  //Get values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

//Save messages to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  });
}

// USER AUTHENTICATION
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    //var displayName = user.displayName
    //alert("Welcome back, " + displayName)
  } else {
    // No user is signed in. Redirect to login screen
    alert("Please sign in to view the contents.");
    window.location.href = "signUp.html";
  }
});