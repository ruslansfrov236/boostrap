const swiper = new Swiper('.swiper', {
 
  slidesPerView: 1,
  spaceBetween: 10,
  parallax: true,
  loop: true,
  
  autoplay: {
    delay: 1000, // 1000 milliseconds = 1 second
    disableOnInteraction: false, // Allow user interactions without stopping autoplay
},
pagination: {
  el: '.swiper-pagination',
},
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
})