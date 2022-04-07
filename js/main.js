const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // effect: "cards",
  // effect: "fade",
  effect: "flip",
  slideToClickedSlide: true,
  // speed: 10,
  // zoom: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },


  // Navigation arrows
  // navigation: false,
  navigation: 
  
  { 
    // nextEl: '.swiper-button-next',
    nextEl: '.swiper-wrapper',
    // prevEl: '.swiper-button-prev'
  }

  // And if we need scrollbar
  // scrollbar: {
  //   // el: '.swiper-scrollbar',
  // },
});


// function full () {

// var elem = document.getElementById("swiper");

// elem.webkitRequestFullscreen();

// }


// fullElement = document.getElementById("full")

// fullElement.addEventListener("click", full)