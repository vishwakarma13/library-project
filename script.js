const myLibrary = [];

function Book (id, name, writer) {
    this.id = id;
    this.name = name;
    this.writer = writer;
}

function addBookToLibrary (id, name, writer) {
    let bookObject = new Book (id, name, writer);
    myLibrary.push(bookObject);
}   

addBookToLibrary("1", "Chacha Chaudhary", "Diamond Comics");
addBookToLibrary("2", "Lotpot", "Diamond Comics");

let newLib = myLibrary.map(objInFocus=> objInFocus);

