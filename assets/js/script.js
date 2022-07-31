// Слайдер Партнёры
const swiper = new Swiper(".partners__carousel", {
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

// Всплывающие окна

const btnReCall = document.querySelector(".header__btn");
const popOverlap = document.querySelector(".popup-overlap");
const reCallForm = document.querySelector(".popup-recall");
const closeBtn = document.querySelector(".close-btn");

btnReCall.addEventListener("click", () => {
  reCallForm.classList.add("show-fc");
  popOverlap.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  reCallForm.classList.remove("show-fc");
  popOverlap.classList.remove("show");
});

popOverlap.addEventListener("click", () => {
  reCallForm.classList.remove("show-fc");
  popOverlap.classList.remove("show");
});
