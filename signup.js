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
const firebaseConfig = {
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
const test = firebase.initializeApp(firebaseConfig);

document.getElementById("signUp").addEventListener("click", signUpUser);

function signUpUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((e) => {
      console.log(e);
    });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user);
  } else {
  }
});

// Initialize Firebase (LOG IN)
firebase.initializeApp(firebaseConfig);

document.getElementById("loginBtn").addEventListener("click", LoginUser);

function LoginUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

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
    window.location = "./ewaste.html";
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
