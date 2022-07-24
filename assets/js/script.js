var swiper = new Swiper(".partners__carousel", {
  slidesPerView: 5,
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 0,
      slideToClickedSlide: true,
    },
  },
});
