// @prepros-append vendor/jquery-3.3.1.min.js
// @prepros-append vendor/popper.min.js
// @prepros-append vendor/bootstrap.min.js
// @prepros-append vendor/owl.carousel.min.js
// @prepros-append vendor/aos.js
// @prepros-append vendor/isotope.pkgd.min.js
// @prepros-append vendor/jquery.animateNumber.min.js
// @prepros-append vendor/jquery.waypoints.min.js
// @prepros-append vendor/TweenMax.min.js
// @prepros-append vendor/jquery.easing.1.3.js
// @prepros-append vendor/jarallax.min.js
// @prepros-append vendor/jarallax-video.min.js
// @prepros-append vendor/jquery.validate.min.js
// @prepros-append vendor/jquery.fancybox.min.js
// @prepros-append vendor/stickyfill.min.js
// @prepros-append vendor/imagesloaded.pkgd.min.js
// @prepros-append vendor/ScrollMagic.min.js
// @prepros-append vendor/scrollmagic.animation.gsap.min.js


// contact from working with java script

function sendEmail() {
  

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;


  Email.send({
  Host : "smtp.elasticemail.com",  
  Username : "hashirvesir123@gmail.com",
  Password : "E5B333EEAEE8645E73F97A5AD03101C657CB",
  To : 'hashir2209b@aptechgdn.net',
  From : "hashirvesir123@gmail.com",
  Subject : "Portfolio Contact Page Inquiry",
  Body : "Name :	&nbsp;"+ name + "<br/> UserEmail :	&nbsp;"   + email + "<br/> Message : &nbsp;"+ message
}).then(
message => alert("Your Message Successfully Send")
);
}




