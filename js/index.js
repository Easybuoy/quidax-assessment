const setActive = () => {
  if (window.screen.width > 1000) {
    document.getElementById("sidebar").classList.add("active");

    // document.getElementById("sidebar").style.width = "350px";
    // document.getElementsByClassName("main-content")[0].style.marginLeft =
    //   "350px";
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
        if (window.screen.width > 1000) {
          document.getElementById("sidebar").style.width = "0";
          document.getElementsByClassName("main-content")[0].style.marginLeft =
            "0";
        }

        document.getElementById("sidebar").classList.remove("active");
      }
    }
  }
});

window.addEventListener("resize", () => {
  setActive();
});

document.getElementById("mobile-search");

const toggleNav = () => {
  const sidebar = document.getElementById("sidebar").classList.add("active");
  console.log("---");
  if (window.screen.width > 1000) {
    document.getElementById("sidebar").style.width = "350px";
    document.getElementsByClassName("main-content")[0].style.marginLeft =
      "350px";
  }
};

const toggleSearch = () => {
  const navLeft = document.getElementsByClassName("nav__left")[0];
  navLeft.style.display = "none";

  const navSearch = document.getElementsByClassName("nav__search")[0];
  navSearch.style.display = "flex";
  navSearch.style.width = "80%";
  navSearch.style.marginRight = "0.5rem";

  const navLinks = document.getElementsByClassName("nav__links")[0];
  navLinks.style.display = "none";

  const navButton = document.getElementsByClassName("nav__button")[0];
  navButton.style.display = "flex";
};

const toggleBackButton = () => {
  const navLeft = document.getElementsByClassName("nav__left")[0];
  navLeft.style.display = "flex";

  const navSearch = document.getElementsByClassName("nav__search")[0];
  navSearch.style.display = "none";

  const navLinks = document.getElementsByClassName("nav__links")[0];
  navLinks.style.display = "flex";

  const navButton = document.getElementsByClassName("nav__button")[0];
  navButton.style.display = "none";
};

setActive();
