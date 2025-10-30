// window.addEventListener("scroll", function() {
//   const navbar = document.querySelector(".transparent-navbar");
//   if (window.scrollY > 50) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });


// Initialize Swiper for logo carousel
var swiper = new Swiper(".akunta003-swiper", {
  slidesPerView: 6,      // Show 6 logos at once
  spaceBetween: 30,      // Space between logos
  loop: true,            // Infinite loop
  autoplay: {
    delay: 0,            // No pause, continuous scrolling
    disableOnInteraction: false,
  },
  speed: 3000,           // Adjust speed of scrolling
  freeMode: true,        // Smooth continuous effect
  breakpoints: {
    1200: { slidesPerView: 6 },
    992: { slidesPerView: 4 },
    768: { slidesPerView: 3 },
    576: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  }
});


// <!========================================
            // START BACK TO TOP 
// ======================================== >
let backToTopButton = document.getElementById("backToTop");
window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
};
backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
// <!========================================
            // END BACK TO TOP
// ======================================== >