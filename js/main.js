const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // effect: "cards",
  slideToClickedSlide: true,
  zoom: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    // nextEl: '.swiper-wrapper',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    // el: '.swiper-scrollbar',
  },
});