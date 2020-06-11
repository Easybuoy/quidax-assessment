const data = [
  {
    id: 1,
    title: "Built To Last",
    author: ["Jim Collins", "Jerry I. Porras"],
    genre: ["Business", "Entrepreneurship"],
    rating: 4.0,
    likes: 29,
    people: 31,
    date_publushed: 2001,
    image: "../assets/books/built-to-last.png",
    status: "Borrowed Out",
  },
  {
    id: 2,
    title: "Effective Python",
    author: ["Diomidis Spinellis"],
    genre: ["Motivational"],
    rating: 4.0,
    likes: 29,
    people: 31,
    date_publushed: null,
    image: "../assets/books/effective-python.png",
    status: "Available",
  },
  {
    id: 3,
    title: "Big Magic",
    author: ["Elizabeth Gilbert"],
    genre: ["Business", "Entrepreneurship"],
    rating: 4.0,
    likes: 29,
    people: 31,
    date_publushed: 2014,
    image: "../assets/books/big-magic.png",
    status: "Available",
  },
  {
    id: 4,
    title: "The Effective Engineer",
    author: ["Edmond Lau"],
    genre: ["Motivational"],
    rating: 4.0,
    likes: 29,
    people: 31,
    date_publushed: 2009,
    image: "../assets/books/the-effective-engineer.png",
    status: "Available",
  },
  {
    id: 5,
    title: "The Lean Startup",
    author: ["Eric Reis"],
    genre: ["Motivational"],
    rating: 4.0,
    likes: 29,
    people: 31,
    date_publushed: 2005,
    image: "../assets/books/the-lean-startup.png",
    status: "Available",
  },
];

const loadFeaturedBooks = (books) => {
  const booksContainer = document.querySelector(
    ".main-content__books_container"
  );

  books.forEach((book) => {
    const newbook = document.createElement("div");
    newbook.className = "main-content__book";

    const bookImageContainer = document.createElement("div");
    bookImageContainer.className = "main-content__book_image";

    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.alt = book.title;

    bookImageContainer.appendChild(bookImage);
    newbook.appendChild(bookImageContainer);

    const bookDetail = document.createElement("div");
    bookDetail.className = "main-content__book_detail";

    const availability = document.createElement("p");
    availability.className = `main-content__book_status ${
      book.status !== "Available" && "unavailable"
    }`;
    availability.textContent = book.status;

    const bookTitle = document.createElement("h5");
    bookTitle.className = "main-content__book_title";
    bookTitle.textContent = book.title;

    const bookCreation = document.createElement("div");
    bookCreation.className = "main-content__book_creation";

    const bookAuthor = document.createElement("p");
    bookAuthor.className = "main-content__book_character";
    bookAuthor.textContent = book.author.join(", ");

    bookCreation.appendChild(bookAuthor);

    const bookCreationYear = document.createElement("p");
    bookCreationYear.textContent = `\xa0 - ${book.date_publushed}`;

    bookCreation.appendChild(bookCreationYear);

    const bookGenre = document.createElement("p");
    bookGenre.className = "main-content__book_genre";
    bookGenre.textContent = book.genre.join(", ");

    const bookPopularityDetail = document.createElement("div");
    bookPopularityDetail.className = "main-content__book_popularity_detail";

    const bookRatingsContainer = document.createElement("div");
    bookRatingsContainer.className = "main-content__book_ratings_container";

    const bookRatings = document.createElement("p");
    bookRatings.textContent = `Ratings: ${book.rating.toFixed(1)}`;

    for (let i = 0; i < book.rating; i++) {
      console.log("--");
    }

    bookRatingsContainer.appendChild(bookRatings);
    bookPopularityDetail.appendChild(bookRatingsContainer);

    bookDetail.appendChild(availability);
    bookDetail.appendChild(bookTitle);
    bookDetail.appendChild(bookCreation);
    bookDetail.appendChild(bookGenre);
    bookDetail.appendChild(bookPopularityDetail);
    newbook.appendChild(bookDetail);
    booksContainer.appendChild(newbook);
    console.log(book);
  });
  console.log(booksContainer);
  return booksContainer;
};

loadFeaturedBooks(data);
