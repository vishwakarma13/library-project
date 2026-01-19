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

addBookToLibrary("1", "Chacha Chaudhary", "Chacha Comics"); //manually passing values to function
addBookToLibrary("2", "Lotpot", "Lotpot Comics"); //manually passing values to function

//function that loops through the array myLibrary (which stores all the created books)
function displaysEachBook () {
    for (let i=0; i<myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
};

//to add the contents of book in table cells
let bookname1 = document.querySelector("#bookname1");
let writername1 = document.querySelector("#writername1");
let pagesin1 = document.querySelector("#pagesin1");

displaysEachBook ();//calls the displaysEachBook function