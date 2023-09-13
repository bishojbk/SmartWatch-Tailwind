const header = document.querySelector("header");
const scroll = document.getElementById("btn-back-to-top");

window.addEventListener("scroll", function () {
  var scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 100) {
    header.classList.add("bg-almostblack");
  }

  if (scrollY < 100) {
    header.classList.remove("bg-almostblack");
  }
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    scroll.classList.add("show");
  } else {
    scroll.classList.remove("show");
  }

  scroll.addEventListener("click", () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
