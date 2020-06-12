const setSearchPlaceholder = () => {
  if (window.screen.width < 1000) {
    const input = document.getElementById("input");
    input.placeholder = "Search";
  } else {
    const input = document.getElementById("input");
    input.placeholder = "Search books, genres, authors, etc.";
  }
};

const onSearchChange = (e) => {
  const inputValue = document.getElementById("input").value;
  console.log(inputValue);
  const filteredSearchResults = searchResultsData.filter((searchItem) =>
    searchItem.toLocaleLowerCase().startsWith(inputValue)
  );

  loadSearchData(filteredSearchResults);
  console.log(filteredSearchResults);
};

const loadSearchData = (searchResultsData) => {
    
  const searchSuggestions = document.querySelector(".nav__search__suggestions");

  searchSuggestions.innerHTML = "";
  searchResultsData.forEach((searchItem) => {
    const searchItemDiv = document.createElement("div");
    searchItemDiv.className = "nav__search__suggestions__item";
    searchItemDiv.textContent = searchItem;

    searchSuggestions.appendChild(searchItemDiv);
  });
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

const toggleSearchResults = () => {
  loadSearchData(searchResultsData);
  console.log("=sss");
  const searchSugesstions = document.querySelector(".nav__search__suggestions");
  searchSugesstions.classList.toggle("shown_suggestions");
};

setSearchPlaceholder();
