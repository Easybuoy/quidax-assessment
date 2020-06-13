const toggleCancel = () => {
  const toggle = document.querySelector(".open");
  const bookOverlay = document.querySelector(".overlay");
  // const image =
  bookOverlay.classList.add("showBookDetail");
  toggle.style.display = "none";
};

const toggleOpen = () => {
  console.log("aa");
  const openToggle = document.querySelector(".open");
  openToggle.style.display = "flex";

  const bookOverlay = document.querySelector(".overlay");
  bookOverlay.classList.remove("showBookDetail");
};

const loadCarousel = (carouselData) => {
  console.log(carouselData);
  const carousel = document.querySelector(".carousel");
  console.log(carousel);

  carouselData.forEach((carouselItem) => {
    console.log(carouselItem);
    const carouselCell = document.createElement("div");
    carouselCell.className = "carousel-cell";

    const carouselCellImage = document.createElement("img");
    carouselCellImage.className = "carousel-cell-image";
    carouselCellImage.alt = carouselItem.title;
    carouselCellImage.src = carouselItem.image;
    carouselCell.appendChild(carouselCellImage);

    const toggle = document.createElement("div");
    toggle.className = "toggle";
    toggle.setAttribute("onclick", "toggleCancel()");

    const toggleImage = document.createElement("img");
    toggleImage.src = "../assets/details-toggle.svg";
    toggleImage.alt = "toggle";
    toggleImage.className = "open";

    toggle.appendChild(toggleImage);

    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const bookDetail = document.createElement("div");
    bookDetail.className = "book-detail";
    bookDetail.setAttribute("onclick", "toggleOpen()");

    const toggleClose = document.createElement("div");
    toggleClose.className = "close";

    const toggleCloseImage = document.createElement("img");
    toggleCloseImage.src = "../assets/close-details.svg";
    toggleCloseImage.alt = "toggle";

    toggleClose.appendChild(toggleCloseImage);

    bookDetail.appendChild(toggleClose);

    const bookStatus = document.createElement("p");
    bookStatus.className = "book_status";
    bookStatus.textContent = carouselItem.status;
    carouselItem.status === "Borrowed Out" &&
      bookStatus.classList.add("unavailable");

    bookDetail.appendChild(bookStatus);

    const bookHeader = document.createElement("div");
    bookHeader.className = "book_header";

    const bookHeaderTitle = document.createElement("h5");
    bookHeaderTitle.className = "book_title";
    bookHeaderTitle.textContent = carouselItem.title;

    const bookHeaderCreators = document.createElement("span");
    bookHeaderCreators.textContent = carouselItem.author.join(", ");

    bookHeader.appendChild(bookHeaderTitle);
    bookHeader.appendChild(bookHeaderCreators);

    bookDetail.appendChild(bookHeader);

    const bookGenreSection = document.createElement("div");
    bookGenreSection.className = "book_genre";

    const bookGenre = document.createElement("p");

    const bookGenrePlaceholder = document.createElement("span");
    bookGenrePlaceholder.textContent = "Genre: ";

    const bookGenreSpan = document.createElement("span");
    bookGenreSpan.textContent = carouselItem.genre.join(", ");
    bookGenreSpan.className = "content";

    bookGenre.appendChild(bookGenrePlaceholder);
    bookGenre.appendChild(bookGenreSpan);
    bookGenreSection.appendChild(bookGenre);

    const bookLabel = document.createElement("p");

    const bookLabelPlaceholder = document.createElement("span");
    bookLabelPlaceholder.textContent = "Label: ";

    const bookLabelSpan = document.createElement("span");
    bookLabelSpan.textContent = carouselItem.labels.join(", ");
    bookLabelSpan.className = "content";

    bookLabel.appendChild(bookLabelPlaceholder);
    bookLabel.appendChild(bookLabelSpan);

    bookGenreSection.appendChild(bookLabel);
    bookDetail.appendChild(bookGenreSection);

    const ratingsContainer = document.createElement("div");
    ratingsContainer.className = "ratings_container";

    const ratings = document.createElement("div");
    ratings.className = "ratings";

    const rating = document.createElement("p");
    rating.textContent = `Ratings: ${carouselItem.rating.toFixed(1)}`;

    ratings.appendChild(rating);

    const ratingsImageDiv = document.createElement("div");
    ratingsImageDiv.className = "ratings_img";
    const ratingsImageFilled = document.createElement("img");
    ratingsImageFilled.src = "./assets/rating-filled.svg";
    ratingsImageFilled.alt = carouselItem.title;

    ratingsImageDiv.appendChild(ratingsImageFilled);
    const secondRatingsImage = ratingsImageFilled.cloneNode(true);
    ratingsImageDiv.appendChild(secondRatingsImage);
    const thirdRatingsImage = ratingsImageFilled.cloneNode(true);
    ratingsImageDiv.appendChild(thirdRatingsImage);
    const fourthRatingsImage = ratingsImageFilled.cloneNode(true);
    ratingsImageDiv.appendChild(fourthRatingsImage);
    const fifthRatingsImage = document.createElement("img");
    fifthRatingsImage.src = "./assets/rating.svg";
    fifthRatingsImage.alt = carouselItem.title;
    ratingsImageDiv.appendChild(fifthRatingsImage);

    ratings.appendChild(ratingsImageDiv);

    ratingsContainer.appendChild(ratings);

    const rule = document.createElement("hr");

    ratingsContainer.appendChild(rule);

    

    bookDetail.appendChild(ratingsContainer);

    overlay.appendChild(bookDetail);
    carousel.appendChild(carouselCell);
    carouselCell.appendChild(toggle);
    carouselCell.appendChild(overlay);
  });
};

loadCarousel([...data, ...data]);

const carouselElement = document.querySelector(".carousel");

const flkty = new Flickity(carouselElement, {
  cellAlign: "left",
  wrapAround: true,
  contain: true,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 40,
    x3: 60,
  },
});
