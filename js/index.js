

const setActive = () => {
  if (window.screen.width > 1200) {
    document.getElementById("sidebar").classList.add("active");
  } else {
    document.getElementById("sidebar").classList.remove("active");
  }
};





window.addEventListener("click", (e) => {
  if (window.screen.width < 1200) {
    if (document.getElementById("sidebar").contains(e.target)) {
      if (e.target.alt === "Back") {
        document.getElementById("sidebar").classList.remove("active");
      }
    } else {
      if (!(e.target.alt === "Menu")) {
        if (window.screen.width > 1200) {
          document.getElementById("sidebar").style.width = "0";
          document.querySelector(".main-content").style.marginLeft = "0";
        }

        document.getElementById("sidebar").classList.remove("active");
      }
    }
  }
});

window.addEventListener("resize", () => {
  setActive();
  setSearchPlaceholder();
  //   toggleSearch(window.screen.width);

  //   if (window.screen.width > 660) {
  //     const navLeft = document.querySelector(".nav__left");
  //     navLeft.style.display = "flex";

  //     const navSearch = document.querySelector(".nav__search");
  //     navSearch.style.display = "flex";

  //     const navLinks = document.querySelector(".nav__links");
  //     navLinks.style.display = "flex";

  //     const navButton = document.querySelector(".nav__button");
  //     navButton.style.display = "none";
  //   }
  //   else {
  //     const navSearch = document.querySelector(".nav__search");
  //     navSearch.style.display = "none";
  //   }
});

document.getElementById("mobile-search");

const toggleNav = () => {
  const sidebar = document.getElementById("sidebar").classList.add("active");
  if (window.screen.width > 1200) {
    document.getElementById("sidebar").style.width = "350px";
    document.querySelector("main-content").style.marginLeft = "350px";
  }
};


const toggleBackButton = () => {
  const navLeft = document.querySelector(".nav__left");
  navLeft.style.display = "flex";

  const navSearch = document.querySelector(".nav__search");
  navSearch.style.display = "none";

  const navLinks = document.querySelector(".nav__links");
  navLinks.style.display = "flex";

  const navButton = document.querySelector(".nav__button");
  navButton.style.display = "none";
};

setActive();

// var elem = document.querySelector(".carousel");
// var flkty = new Flickity(elem, {
//   // options
//   cellAlign: "left",
//   contain: true,
// });

// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity(".carousel", {
//   // options
// });
