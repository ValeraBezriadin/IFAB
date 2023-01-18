const menuButton = document.querySelector(".product__active")
const menuList = document.querySelector(".nav__product")
 
menuButton.addEventListener("click", ()=>{
    menuList.classList.toggle("nav__product--active")
})
