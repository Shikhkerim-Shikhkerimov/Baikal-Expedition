// слайдер
document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};

document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

// кнопка секции route-section
const routeBtn = document.querySelector(".nav-btn_routeBtn");
const routeClose = document.querySelector(".routeMobile__close");

routeBtn.addEventListener("click", function () {
  document.querySelector(".routeMobile").style.display = "block";
});

routeClose.addEventListener("click", function () {
  document.querySelector(".routeMobile").style.display = "none";
});

// слайдер для mobileContent секции about-us
document.getElementById("aboutUsNext").onclick = function () {
  let lists = document.querySelectorAll(".aboutUsMobile");
  document.querySelector(".aboutUsWraper").appendChild(lists[0]);
};

document.getElementById("aboutUsPrev").onclick = function () {
  let lists = document.querySelectorAll(".aboutUsMobile");
  document.querySelector(".aboutUsWraper").prepend(lists[lists.length - 1]);
};

// слайдер для mobileContent секции tour-program
document.getElementById("tourProgramNext").onclick = function () {
  let lists = document.querySelectorAll(".mobileContent");
  document.querySelector(".tourProgramWraper").appendChild(lists[0]);
};

document.getElementById("tourProgramPrev").onclick = function () {
  let lists = document.querySelectorAll(".mobileContent");
  document.querySelector(".tourProgramWraper").prepend(lists[lists.length - 1]);
};

// меню мобильной версии
const hamburger = document.querySelector(".mobile-menu__hamburger");
const mbSpan1 = document.querySelector(".mobile-menu__span1");
const mbSpan2 = document.querySelector(".mobile-menu__span2");
const menu = document.querySelector(".mobile-menu__menu")

hamburger.addEventListener("click", function () {
  mbSpan1.classList.toggle("span-close");
  mbSpan2.classList.toggle("span-close");
  menu.classList.toggle("toogleMb")
  document.body.classList.toggle("no-scroll");
});

const menuItem = document.querySelectorAll(".mobile-menu__item");

for (let value of menuItem) {
  value.addEventListener("click", function () {
    menu.classList.toggle("toogleMb")
    mbSpan1.classList.remove("span-close");
    mbSpan2.classList.remove("span-close");
  });
}