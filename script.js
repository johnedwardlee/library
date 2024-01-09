const myLibrary = [];

function Book(title, author, pageNum, read) {
  this.author = author;
  this.title = title;
  this.pageNum = pageNum;
  this.read = read;
}

const addBtn = document.getElementById("add-book");
const addDlg = document.getElementById("add-book-dialog");
addBtn.addEventListener("click", () => {
  addDlg.showModal();
  // newBook = new Book("test", "test", "test", true);
  // myLibrary.push(newBook);
  // console.log(myLibrary);
});

window.onclick = (e) => {
  console.log(e.target);
  if (e.target == addDlg) {
    addDlg.close();
  }
};
