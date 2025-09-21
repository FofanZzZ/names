// Мобильное меню

const overlay = document.querySelector('.overlay');
const html = document.querySelector('html');
const menuBtn = document.querySelector('.menu__btn');
const closeBtn = document.querySelector('.menu__close-btn');
const menuItems = document.querySelectorAll('.mobile-link');
const menu = document.querySelector('.menu__mobile');

menuBtn.addEventListener('click', () => {
  overlay.classList.add('active');
  menu.classList.add('active');
  html.classList.add('disable-scroll');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
  menu.classList.remove('active');
  html.classList.remove('disable-scroll');
});

overlay.addEventListener('click', () => {
  overlay.classList.remove('active');
  menu.classList.remove('active');
  html.classList.remove('disable-scroll');
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    overlay.classList.remove('active');
    menu.classList.remove('active');
    html.classList.remove('disable-scroll');
  });
});

// Слайдеры горизонтальный и вертикальный

const swiper = new Swiper('.videos', {
  rewind: true,
  loop: false,

  navigation: {
    nextEl: '.next-1, .next-2',
    prevEl: '.prev-1, .prev-2',
  },

  slidesPerView: 'auto',
  spaceBetween: 16,

  breakpoints: {
        1024: {
          slidesPerView: 'auto',
          spaceBetween: 53,
        },
    },
});


var sliders = document.querySelectorAll('.videos-v'),
    prevArrow1 = document.querySelectorAll('.prev-v-1'),
    nextArrow1 = document.querySelectorAll('.next-v-1'),
    prevArrow2 = document.querySelectorAll('.prev-v-2'),
    nextArrow2 = document.querySelectorAll('.next-v-2');

sliders.forEach((slider, idx) => {
  let swiperv = new Swiper(slider, {
    rewind: true,
    loop: false,

    navigation: {
      nextEl: [nextArrow1[idx], nextArrow2[idx]],
      prevEl: [prevArrow1[idx], prevArrow2[idx]],
    },

    slidesPerView: 'auto',
    spaceBetween: 24,

    breakpoints: {
      1024: {
        spaceBetween: 65,
      },
    },
  })
});

// Работа формы с отправкой данных

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('requestForm');
  const nameInput = document.getElementById('nameInput');
  const phoneInput = document.getElementById('phoneInput');
  const submitButton = document.getElementById('submitButton');

  // Маска для телефона
  phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.startsWith('7') || value.startsWith('8')) {
        value = value.substring(1);
    }
    
    let formattedValue = '+7 ';
    
    if (value.length > 0) {
        formattedValue += value.substring(0, 3);
    }
    if (value.length > 3) {
        formattedValue += ' ' + value.substring(3, 6);
    }
    if (value.length > 6) {
        formattedValue += '-' + value.substring(6, 8);
    }
    if (value.length > 8) {
        formattedValue += '-' + value.substring(8, 10);
    }
    
    e.target.value = formattedValue;
    
    // Валидация в реальном времени
    validatePhone();
    updateSubmitButton();
  });

  // Валидация имени в реальном времени
  nameInput.addEventListener('input', function() {
    validateName();
    updateSubmitButton();
  });

  // Валидация при потере фокуса
  nameInput.addEventListener('blur', validateName);
  phoneInput.addEventListener('blur', validatePhone);

  // Отправка формы
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    
    if (isNameValid && isPhoneValid) {
      // Здесь можно отправить данные на сервер
      // alert('Форма успешно отправлена!');
      form.reset();
      resetValidation();
    }
  });

  function validateName() {
    const value = nameInput.value.trim();
    const isValid = value.length > 0;
    
    if (!isValid) {
      nameInput.classList.add('error');
    } else {
      nameInput.classList.remove('error');
    }
    
    return isValid;
  }

  function validatePhone() {
    const value = phoneInput.value.replace(/\D/g, '');
    // Номер должен содержать 11 цифр (включая 7)
    const isValid = value.length === 11 && value.startsWith('7');
    
    if (!isValid) {
      phoneInput.classList.add('error');
    } else {
      phoneInput.classList.remove('error');
    }
    
    return isValid;
  }

  function updateSubmitButton() {
    const isNameValid = nameInput.value.trim().length > 0;
    const phoneValue = phoneInput.value.replace(/\D/g, '');
    const isPhoneValid = phoneValue.length === 11 && phoneValue.startsWith('7');
    
    submitButton.disabled = !(isNameValid && isPhoneValid);
  }

  function resetValidation() {
    nameInput.classList.remove('error');
    phoneInput.classList.remove('error');
    submitButton.disabled = false;
  }

  // Инициализация кнопки при загрузке
  updateSubmitButton();
});