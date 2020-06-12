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
    searchItem.toLocaleLowerCase().startsWith(inputValue.toLocaleLowerCase())
  );

  loadSearchData(filteredSearchResults, inputValue.length);
  console.log(filteredSearchResults, inputValue.length);
};

const loadSearchData = (searchResultsData, charactersToBeHighlighted = 0) => {
  const searchSuggestions = document.querySelector(".nav__search__suggestions");
  searchSuggestions.innerHTML = "";
  if (searchResultsData.length === 0) {
    const searchItemDiv = document.createElement("div");
    searchItemDiv.className =
      "nav__search__suggestions__item nav__search__suggestions__item_default";
    searchItemDiv.textContent = "No results found with search criteria";

    searchSuggestions.appendChild(searchItemDiv);
  } else {
    searchResultsData.forEach((searchItem) => {
      let highlightedText = "";
      let remainingText = "";
      const highlightSpan = document.createElement("span");
      if (charactersToBeHighlighted > 0) {
        highlightedText = searchItem.slice(0, charactersToBeHighlighted);
        remainingText = searchItem.slice(
          charactersToBeHighlighted,
          searchItem.length
        );

        highlightSpan.textContent = highlightedText;
        highlightSpan.classList.add("span");
      }
      const remainingSpan = document.createElement("span");
      console.log(highlightedText, remainingText);
      const searchItemDiv = document.createElement("div");
      searchItemDiv.className = "nav__search__suggestions__item";
      remainingSpan.textContent =
        charactersToBeHighlighted == 0 ? searchItem : remainingText;

      const pre = document.createElement("pre");
      pre.appendChild(highlightSpan);
      pre.appendChild(remainingSpan);
      searchItemDiv.appendChild(pre);

      searchSuggestions.appendChild(searchItemDiv);
    });
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

const toggleSearchResults = () => {
  loadSearchData(searchResultsData);
  console.log("=sss");
  const searchSugesstions = document.querySelector(".nav__search__suggestions");
  searchSugesstions.classList.toggle("shown_suggestions");
};

setSearchPlaceholder();
