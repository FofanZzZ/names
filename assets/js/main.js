const swiper = new Swiper('.videos', {
  loop: false,

  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },

  slidesPerView: 1,
  spaceBetween: 53,

  breakpoints: {
        1024: {
          slidesPerView: 1.7,
        },
    },
});

const swiperv = new Swiper('.videos-v', {
  loop: false,

  navigation: {
    nextEl: '.next-v',
    prevEl: '.prev-v',
  },

  slidesPerView: 1,
  spaceBetween: 65,

  breakpoints: {
        1024: {
          slidesPerView: 3,
        },
    },
});