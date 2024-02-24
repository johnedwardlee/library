const myLibrary = [];

function Book(title, author, pageNum, read) {
  this.author = author;
  this.title = title;
  this.pageNum = pageNum;
  this.read = read;
}

function drawNewBook(book, idx) {
  const newBookElement = document.createElement(`book-${idx}`);
  newBookElement.innerHTML = `
  <article id=book-${idx} class="book">
    <h3>Title: ${book.title}<button class="fa fa-close icon"></button></h3>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pageNum}</p>
    <p>Read: <input id="book-${idx}-read-check" type="checkbox"/></p>
  </article>
  `;
  grid.appendChild(newBookElement);
  if (book.read) {
    const bookReadChk = document.getElementById(`book-${idx}-read-check`);
    bookReadChk.checked = true;
  }
}

const grid = document.getElementById("grid");
const addBtn = document.getElementById("add-book");
const addDlg = document.getElementById("add-book-dialog");
const addConfBtn = document.getElementById("add-confirm");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
addBtn.addEventListener("click", () => {
  addDlg.showModal();
});

addConfBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newBook = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(newBook);
  drawNewBook(newBook, myLibrary.length);
  // reset inputs
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
  addDlg.close();
});
