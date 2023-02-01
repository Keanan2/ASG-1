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
ScrollReveal().reveal(".sec-01 .image, .info", {
  delay: 600,
  origin: "bottom",
});
ScrollReveal().reveal(".text-box", { delay: 700, origin: "right" });
ScrollReveal().reveal(".media-icons i", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});
ScrollReveal().reveal(".sec-02 .image, .timeline, #navbar", {
  delay: 500,
  origin: "top",
});
// ScrollReveal().reveal(".media-info li", {
//   delay: 500,
//   origin: "left",
//   interval: 200,
// });

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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

//zoom in and out of image
var zoom = document.getElementById("zoom");

zoom.addEventListener("click", (e) => {
  zoom.style.display = "none";
});

var img = document.getElementById("orgimg");

img.addEventListener("click", (e) => {
  console.log(zoom);
  zoom.style.display = "flex";
});

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
    if (sessionStorage.getItem("loggedIn") === "true") {
      var displayName = user.displayName;
      Swal.fire({
        icon: "success",
        text: "Welcome back, " + displayName,
      });
      sessionStorage.removeItem("loggedIn"); // Remove the welcome message after displaying
    }
  } else {
    // No user is signed in. Redirect to login screen
    alert("Please sign in to view the contents.");
    window.location.href = "signUp.html";
  }
});
