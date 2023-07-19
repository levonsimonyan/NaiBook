window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 0);
});

document.addEventListener("scroll", function() {
  var element = document.querySelector(".inner-div");
  var position = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;
  if (position.top < windowHeight && position.bottom >= 0) {
      element.style.animationPlayState = "running";
  }
});

///////////////////////////////////////////////////////////////

document.addEventListener("scroll", function() {
  var element = document.querySelector(".right-side");
  var position = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;
  if (position.top < windowHeight && position.bottom >= 0) {
      element.style.animationPlayState = "running";
  }
});

document.addEventListener("scroll", function() {
  var element = document.querySelector(".left-side");
  var position = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;
  if (position.top < windowHeight && position.bottom >= 0) {
      element.style.animationPlayState = "running";
  }
});


$(document).ready(function(){
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:5
    }
  }
});

// Handle heart icon click
$('.heart i').on('click', function() {
  $(this).toggleClass('far fas');
  $(this).parent().toggleClass('heart-active');
});
});




//////animated


document.addEventListener("scroll", function() {
var element = document.querySelector(".leftnoote");
var position = element.getBoundingClientRect();
var windowHeight = window.innerHeight;
if (position.top < windowHeight && position.bottom >= 0) {
    element.style.animationPlayState = "running";
}
});


document.addEventListener("scroll", function() {
var element = document.querySelector(".rightnoote");
var position = element.getBoundingClientRect();
var windowHeight = window.innerHeight;
if (position.top < windowHeight && position.bottom >= 0) {
    element.style.animationPlayState = "running";
}
});





//////////navbar for login


const openPopupButton = document.getElementById("openPopupButton");
const infoButton = document.getElementById("infoButton");
const closeIcon = document.getElementById("closeIcon");
const nestedPopup = document.getElementById("nestedPopup");
const nestedCloseIcon = document.getElementById("nestedCloseIcon");
const closeNestedPopupButton = document.getElementById("closeNestedPopupButton");
const popupContainer = document.getElementById("popupContainer");

openPopupButton.addEventListener("click", function() {
document.body.style.overflow = "hidden";
popupContainer.style.display = "block";
document.getElementById("mainPopup").style.display = "block";
});

infoButton.addEventListener("click", function() {
document.getElementById("mainPopup").style.display = "none";
nestedPopup.style.display = "block";
});

closeIcon.addEventListener("click", function() {
document.body.style.overflow = "";
popupContainer.style.display = "none";
});

nestedCloseIcon.addEventListener("click", function() {
nestedPopup.style.display = "none";
document.getElementById("mainPopup").style.display = "block";
});









/////////// finish poup
document.getElementById("popupButtonfinish").addEventListener("click", function() {
  document.getElementById("finish-p").style.display = "block";
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
});

document.getElementById("closeFinishP").addEventListener("click", function() {
  document.getElementById("finish-p").style.display = "none";
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto";
});




