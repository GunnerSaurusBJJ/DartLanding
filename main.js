const burger = document.querySelector(".burger");
const menu = document.querySelector(".header-menu");
burger.addEventListener("click", () => {
  burger.classList.toggle("burger_active");
  menu.classList.toggle("hide");
});

$(document).ready(function() {
  $(".slider-faces").slick({
    asNavFor: ".slider-text",
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $(".slider-text").slick({
    asNavFor: ".slider-faces",
    arrows: false,
    draggable: false
  });
});
