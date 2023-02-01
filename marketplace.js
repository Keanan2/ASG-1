//To create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal("div", {
  delay: 500,
  origin: "top",
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//Profile toggle
let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}

// ------------ FOR USER AUTHENTICATION------------
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

// Initialize Firebase
const test = firebase.initializeApp(firebaseConfigs);

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
