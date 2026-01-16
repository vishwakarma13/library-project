const myLibrary = [];

function Book (id, name, writer) { //the constructor function
    this.id = id;
    this.name = name;
    this.writer = writer;
}

function addBookToLibrary (id, name, writer) {
    let bookObject = new Book (id, name, writer);
    myLibrary.push(bookObject); //bookObject is pushed into array myLibrary
}   

addBookToLibrary("1", "Chacha Chaudhary", "Chacha Comics"); //passing values to function
addBookToLibrary("2", "Lotpot", "Lotpot Comics"); //passing values to function

let bookName = document.querySelector("#bookName");
let writerName = document.querySelector("#writerName");

bookName.textContent = myLibrary[0].name;//takes out name the first element of the myLibrary array
writerName.textContent = myLibrary[0].writer;//takes out writer name of the first element of the myLibrary array
