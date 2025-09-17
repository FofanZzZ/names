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


var sliders = document.querySelectorAll('.videos-v'),
    prevArrow = document.querySelectorAll('.prev-v'),
    nextArrow = document.querySelectorAll('.next-v');

sliders.forEach((slider, idx) => {
  let swiperv = new Swiper(slider, {
    loop: false,

    navigation: {
      nextEl: nextArrow[idx],
      prevEl: prevArrow[idx],
    },

    slidesPerView: 1,
    spaceBetween: 65,

    breakpoints: {
      624: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  })
});