console.log("Script running");

const searchForm = document.querySelector("#search-form");
const authorField = document.querySelector("#author");
const filterField = document.querySelector("#filter");
const resultsSection = document.querySelector("#results-holder");

let books = [];
let countBooksRead = 0;

const toggleRead = (e) => {
  const bookID = e.target.dataset.book;
  console.log("Toggling", bookID);
  if (window.localStorage.getItem(bookID)) {
    window.localStorage.removeItem(bookID);
  } else {
    window.localStorage.setItem(bookID, "read");
  }
};

const renderBook = (bookData) => `
  <div class="card m-3 is-flex is-justify-content-space-between is-flex-direction-column">
  <div class="card-content">
    <p class="title">${bookData.title_suggest || bookData.title}</p>
    <p class="subtitle">${bookData.author_name.join(", ")}</p>
  </div>
  <div class="card-footer">
    <p class="card-footer-item">Genre: ${bookData.subject_facet?.[0]}</p>
    <p class="card-footer-item">
      <input type="checkbox" class="book-checkbox" name="read" id="read-${
        bookData.cover_edition_key
      }-box" data-book="${bookData.cover_edition_key}" />
      <span id="read-${bookData.cover_edition_key}-span">
        &nbsp;Read
      </span>
    </p>
  </div>
  </div>
`;

const renderResults = (docs) => {
  console.log("rendering");
  resultsSection.innerHTML = "";
  docs.map((book) => {
    resultsSection.innerHTML += renderBook(book);
  });
};

const getSearchResults = async (url) => {
  console.log("fetching");
  const response = await fetch(url);
  const data = await response.json();
  books = data.docs;
  renderResults(data.docs);
  document.querySelectorAll(".book-checkbox").forEach((box) => {
    if (window.localStorage.getItem(box.dataset.book)) {
      box.checked = true;
    }
    box.addEventListener("change", toggleRead);
  });
};

const searchByAuthor = (e) => {
  e.preventDefault();
  console.log("searching");
  const author = authorField.value.replace(" ", "+");
  const url = `https://openlibrary.org/search.json?author=${author}&sort=new`;
  console.log(url);
  getSearchResults(url);
};

searchForm.addEventListener("submit", searchByAuthor);

const filterResults = () => {
  console.log(filterField.value);
  const searchStr = filterField.value;
  let matches = books.filter((book) =>
    book.title_suggest.toLowerCase().includes(searchStr.toLowerCase())
  );
  renderResults(matches);
};
