window.addEventListener("click", (e) => {
  if (window.screen.width < 660) {
    if (document.getElementById("sidebar").contains(e.target)) {
      if (e.target.alt === "Back") {
        document.getElementById("sidebar").classList.remove("active");
      }
    } else {
      if (!(e.target.alt === "Menu")) {
        document.getElementById("sidebar").classList.remove("active");
      }
    }
  }
});

window.addEventListener("resize", () => {
  if (window.screen.width > 660) {
  }
  //   console.log(window.screen.width);
});

const toggleNav = () => {
  document.getElementById("sidebar").classList.add("active");
};
