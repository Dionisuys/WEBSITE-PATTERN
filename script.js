function toggleBorder(stepbl, sepbrdr) {
  stepbl.addEventListener("mouseover", function () {
    sepbrdr.style.borderBottom = "3px solid white";
  });
  stepbl.addEventListener("mouseout", function () {
    sepbrdr.style.borderBottom = "3px solid black";
  });
}

for (let i = 1; i <= 3; i++) {
  let stepbl = document.getElementById("stepbl" + i);
  let sepbrdr = document.getElementById("sepbrdr" + i);
  toggleBorder(stepbl, sepbrdr);
}

window.addEventListener("scroll", function () {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Показываем кнопку, если страница прокручена на 200px или больше
  if (window.pageYOffset > 500) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
