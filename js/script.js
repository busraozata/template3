const menuToggle = document.querySelector("#toggle-btn");
const navigation = document.querySelector(".navigation");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");

  if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
};

$("ul li").on("click", function () {
  $(this).toggleClass("show");
  $(this).siblings().removeClass("show");
});

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

var swiperBanner = new Swiper(".mySwiperBanner", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var swiperContent = new Swiper(".mySwiperContent", {
  slidesPerView: 2,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiperNews = new Swiper(".mySwiperNews", {});

var swiperBlog = new Swiper(".mySwiperBlog", {
  spaceBetween: 20,
  pagination: {
    el: ".paginationBlog",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
