const swiper = new Swiper('.videos', {
  loop: false,

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  slidesPerView: 1,

  breakpoints: {
        1024: {
          slidesPerView: 1.7,
          spaceBetween: 53,
        },
    },
});