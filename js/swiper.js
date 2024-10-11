const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  centeredSlidesBounds: true,
  setTransition: .2,
  slideToClickedSlide: true,
  setWrapperSize: true,
  breakpoints: {  
      940: {
          slidesPerView: 1.75,
      },
  },
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});