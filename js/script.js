var swiperParent = new Swiper(".parent-slider", {
  loop: true,
  slidesPerView: 1,
  noSwiping: true,
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination-parent",
    clickable: true,
  },
});

var swiperChild = new Swiper(".child-slider", {
  loop: true,
  slidesPerView: 2,
  noSwiping: false,
  pagination: ".swiper-pagination-child",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperNews = new Swiper(".mySwiperNews", {});

var swiperBlog = new Swiper(".mySwiperBlog", {
  slidesPerView: 2,
  spaceBetween: 20,
});



