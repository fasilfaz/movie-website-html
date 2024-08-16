const nav = document.getElementById("nav");
const headerMenu = document.getElementById("header-menu");
const navClose = document.getElementById("nav-close");

if (headerMenu) {
  headerMenu.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

let swiperMovie = new Swiper(".movie__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: 2,
  spaceBetween: 24,

  breakpoints: {
    440: {
      slidesPerView: "auto",
    },
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

let swiperNew = new Swiper(".new__swiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    440: {
      centeredSlides: false,
      slidesPerView: "auto",
    },
    768: {
      centeredSlides: false,
      slidesPerView: 4,
    },
    1200: {
      centeredSlides: false,
      slidesPerView: 5,
    },
  },
});

const blurHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);
