
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

let favCtr = document.querySelector(".fav-ctr");
let cartCtr = document.querySelector(".cart-ctr");

let wishAdd = document.querySelectorAll(".wish-add");
let cartAdd = document.querySelectorAll("cart__btn");

// console.log(wishAdd);
wishAdd.forEach((e) => {
  e.addEventListener("click", () => {
    favCtr.innerHTML = parseInt(favCtr.innerHTML)+1;
  });
});

cartAdd.forEach((e)=>{
  e.addEventListener("click", ()=>{
    cartCtr.innerHTML = parseInt(cartCtr.innerHTML)+1;

  });
 });
function imgGallery() {
  let e = document.querySelector(".details__img"),
    t = document.querySelectorAll(".details__small-img");
  t.forEach((t) => {
    t.addEventListener("click", function () {
      e.src = this.src;
    });
  });
}
navToggle &&
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  }),
  navClose &&
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    }),
  imgGallery();
let swiperCategories = new Swiper(".categories__container", {
    spaceBetween: 24,
    loop: !0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      350: { slidesPerView: 2, spaceBetween: 24 },
      768: { slidesPerView: 3, spaceBetween: 24 },
      992: { slidesPerView: 4, spaceBetween: 24 },
      1200: { slidesPerView: 5, spaceBetween: 24 },
      1400: { slidesPerView: 6, spaceBetween: 24 },
    },
  }),
  swiperProducts = new Swiper(".new__container", {
    spaceBetween: 24,
    loop: !0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2, spaceBetween: 24 },
      992: { slidesPerView: 4, spaceBetween: 24 },
      1400: { slidesPerView: 4, spaceBetween: 24 },
    },
  });
const tabs = document.querySelectorAll("[data-target]"),
  tabsContents = document.querySelectorAll("[content]");
function addToCart(e) {
  wishlist.includes(e) && removeFromWishlist(e), cart.push(e);
}
tabs.forEach((e) => {
  e.addEventListener("click", () => {
    let t = document.querySelector(e.dataset.target);
    tabsContents.forEach((e) => {
      e.classList.remove("active-tab");
    }),
      t.classList.add("active-tab"),
      tabs.forEach((e) => {
        e.classList.remove("active-tab");
      }),
      e.classList.add("active-tab");
  });
});
