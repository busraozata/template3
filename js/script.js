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

var swiperContent = new Swiper(".mySwiperContent", {
  slidesPerView: 2,
  spaceBetween: 8,
  autoplay: {
    delay: 1500,
  },
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
  autoplay: {
    delay: 1500,
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

var swiperBlog = new Swiper(".mySwiperBlogSub", {
  spaceBetween: 20,
  pagination: {
    el: ".paginationBlog",
    clickable: true,
  },
  autoplay: {
    delay: 1500,
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
    1300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
var swiperBlog = new Swiper(".mySwiperDetail", {
  autoplay: {
    delay: 1500,
  },
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
    1300: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

var mySwiperLastPosts = new Swiper(".mySwiperLastPosts", {
  direction: "vertical",
  spaceBetween: 5,
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".mySwiperDoctors", {
  spaceBetween: 30,
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
  buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "share", "close"],
  loop: false,
  protect: true,
});
