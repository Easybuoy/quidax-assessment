const toggleCancel = () => {
  const toggle = document.querySelector(".open");
  const bookOverlay = document.querySelector(".overlay");
  // const image =
  bookOverlay.classList.add("showBookDetail");
  toggle.style.display = "none";
};

const toggleOpen = () => {
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
    carousel.appendChild(carouselCell);
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