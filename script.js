const myLibrary = [];

function Book(title, author, pageNum, read) {
  this.author = author;
  this.title = title;
  this.pageNum = pageNum;
  this.read = read;
  this.setId = function (x) {
    this.id = x;
  };
}

function drawNewBook(book, idx) {
  const newBookElement = document.createElement("article");
  // <article id=book-${idx} class="book">
  newBookElement.innerHTML = `
    <h3>${book.title}<button id="book-${idx}-del" class="fa fa-close icon"></button></h3>
    <p>Author: ${book.author}</p>
    <p>Pages: ${book.pageNum}</p>
    <p>Read: <input id="book-${idx}-read-check" type="checkbox"/></p>
  `;
  newBookElement.setAttribute("id", `book-${idx}`);
  newBookElement.classList.add("book");
  grid.appendChild(newBookElement);
  if (book.read) {
    const bookReadChk = document.getElementById(`book-${idx}-read-check`);
    bookReadChk.checked = true;
  }
  const bookDel = document.getElementById(`book-${idx}-del`);
  bookDel.addEventListener("click", () => {
    for (let i = 0; i < myLibrary.length; i++) {
      if (myLibrary[i].id == newBookElement.getAttribute("id").slice(5)) myLibrary.splice(i, 1);
    }
    grid.removeChild(newBookElement);
    console.log(myLibrary, myLibrary.length);
  });
}

const grid = document.getElementById("grid");
const closeDlg = document.getElementById("close-dlg");
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
closeDlg.addEventListener("click", () => {
  addDlg.close();
});

addConfBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newBook = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(newBook);
  newBook.setId(myLibrary.length - 1);
  drawNewBook(newBook, myLibrary.length - 1);
  // reset inputs
  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
  addDlg.close();
});
