

const setActive = () => {
  if (window.screen.width > 1200) {
    document.getElementById("sidebar").classList.add("active");
  } else {
    document.getElementById("sidebar").classList.remove("active");
  }
};

const setSearchPlaceholder = () => {
  if (window.screen.width < 1000) {
    const input = document.getElementById("input");
    input.placeholder = "Search";
  } else {
    const input = document.getElementById("input");
    input.placeholder = "Search books, genres, authors, etc.";
  }
};

const toggleSearchResults = () => {
  console.log("=sss");
  const searchSugesstions = document.querySelector(".nav__search__suggestions");
  searchSugesstions.classList.toggle("shown_suggestions");
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

const toggleSearch = (width = 660) => {
  if (width <= 660) {
    const navLeft = document.querySelector(".nav__left");
    navLeft.style.display = "none";

    const navSearch = document.querySelector(".nav__search");
    navSearch.style.display = "flex";
    navSearch.className = "nav__search nav__search__mobile";

    const navLinks = document.querySelector(".nav__links");
    navLinks.style.display = "none";

    const navButton = document.querySelector(".nav__button");
    navButton.style.display = "flex";
  }
  //   else {
  //     const navLeft = document.querySelector(".nav__left");
  //     navLeft.style.display = "flex";

  //     const navSearch = document.querySelector(".nav__search");
  //     navSearch.style.display = "none";
  //     // navSearch.className = "nav__search nav__search__mobile";

  //     const navLinks = document.querySelector(".nav__links");
  //     navLinks.style.display = "flex";

  //     const navButton = document.querySelector(".nav__button");
  //     navButton.style.display = "none";
  //   }
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
setSearchPlaceholder();
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
