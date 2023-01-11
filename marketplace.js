//To create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(".main-title, .section-title", {
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
ScrollReveal().reveal(".sec-02 .image, .timeline, #headcontainer", {
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
