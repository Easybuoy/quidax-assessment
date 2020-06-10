const setActive = () => {
  if (window.screen.width > 1000) {
    document.getElementById("sidebar").classList.add("active");
  }
};

window.addEventListener("click", (e) => {
  if (window.screen.width < 1000) {
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

// window.addEventListener("resize", () => {
//   console.log(window.screen);
// });

const toggleNav = () => {
  document.getElementById("sidebar").classList.add("active");
};

setActive();
