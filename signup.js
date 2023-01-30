var log = document.getElementById("login");
var reg = document.getElementById("register");
var btn = document.getElementById("btn");

function register() {
  log.style.left = "-400px";
  reg.style.left = "50px";
  btn.style.left = "110px";
}

function login() {
  log.style.left = "50px";
  reg.style.left = "450px";
  btn.style.left = "0px";
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigs = {
  apiKey: "AIzaSyAwG7RePlLNiGGfs61BttyXserKakBlq74",
  authDomain: "pfd-asg-1.firebaseapp.com",
  databaseURL:
    "https://pfd-asg-1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pfd-asg-1",
  storageBucket: "pfd-asg-1.appspot.com",
  messagingSenderId: "683817910117",
  appId: "1:683817910117:web:6bc464138c242c9853eb8c",
  measurementId: "G-PCCLL01552",
};

// Initialize Firebase (SIGN UP)
const test = firebase.initializeApp(firebaseConfigs);

// Get form elements
var registerUsername = document.getElementById("register-username");
var registerEmail = document.getElementById("register-email");
var registerPassword = document.getElementById("register-password");
var registerSubmitBtn = document.getElementById("register-submit-btn");

// Add event listener to register submit button
registerSubmitBtn.addEventListener("click", function(e) {
  e.preventDefault();

  // Get input values
  var username = registerUsername.value;
  var email = registerEmail.value;
  var password = registerPassword.value;

  // Create user with email and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function() {
      // User created, update profile with username
      firebase.auth().currentUser.updateProfile({
        displayName: username
      });
      alert("Registration successful!")
      document.getElementById("register").reset(); // Remove all credentials in the form after successful register
      // Redirect to another page or show success message
      //window.location.href = "./signUp.html";
    })
    .catch(function(error) {
      // Handle error
      var errorMessage = error.message;
      console.log('Login Error: ', error);
      alert(errorMessage)
    });
});

document.getElementById("login-btn").addEventListener("click", function(event) {
  event.preventDefault();
  
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log('Successful Login: ', user);
      // success, the user is logged in
      alert("Login successful!") // Popup message 
      window.location.href = "/ASG-1/ewaste.html"; // Redirect user to this location after successful login
    })  
    .catch(function(error) {
      var errorMessage = error.message;
      console.log('Login Error: ', error);
      // handle error
      alert(errorMessage);
    });
});

/*
document.getElementById("loginBtn").addEventListener("click", LoginUser);

function LoginUser() {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((e) => {
      console.log(e);

      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
}

function showUserDetails(user) {
  document.getElementById("userDetails").innerHTML =
    "<p>Logged in successfully with ${user.email}<p>";
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  }
});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    //window.location = "./ewaste.html";
    console.log(user);
  }
});

/*
        firebase.auth().onAuthStateChanged(function(user) {
            if (!user) {
                // User is signed in.
                window.location = './index.html';
            }
        });
        */
