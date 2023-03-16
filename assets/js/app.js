$(".customer__list").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
});

const toggle = document.querySelector(".menu__toggle");
const menu = document.querySelector(".menu");
const close = document.querySelector(".menu__close");
toggle.addEventListener("click", function () {
  menu.classList.add("is-show");
});
close.addEventListener("click", function () {
  menu.classList.remove("is-show");
});
