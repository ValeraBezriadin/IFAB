const menuButton = document.querySelector(".nav__button-menu");
const menuList = document.querySelector(".nav__list");
const sabButton = document.querySelector(".product__active");
const subList = document.querySelector(".nav__product");


menuButton.addEventListener("click", ()=> {
  menuButton.classList.toggle("nav__button-active");
  menuList.classList.toggle("nav__list-active");
});

sabButton.addEventListener("click", () => {
  subList.classList.toggle("nav__product--active");
});

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});