/* Подключить слайдер из библиотеки.
https://swiperjs.com/
Слайдер должен автоматически воспроизводиться,
один слайд проигрывается 5 секунд. */

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
