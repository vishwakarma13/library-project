const myLibrary = [];

function Book (name, writer) { //the constructor function
    this.id = crypto.randomUUID();
    this.name = name;
    this.writer = writer;
}

function addBookToLibrary (name, writer) {
    let bookObject = new Book (name, writer);
    myLibrary.push(bookObject); //bookObject is pushed into array myLibrary
}   

addBookToLibrary("Chacha Chaudhary", "Chacha Comics"); //manually passing values to function
addBookToLibrary("Lotpot", "Lotpot Comics"); //manually passing values to function

//function that loops through the array myLibrary (which stores all the created books)
function displaysEachBook () {
    for (let i=0; i<myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
};

//to add the contents of book1 in table cells
let bookid1 = document.querySelector("#bookid1");
let bookname1 = document.querySelector("#bookname1");
let writername1 = document.querySelector("#writername1");
let pagesin1 = document.querySelector("#pagesin1");

bookid1.textContent = myLibrary[0].id;
bookname1.textContent = myLibrary[0].name; //overrides the existing text in the table cell
writername1.textContent = myLibrary[0].writer; //overrides the existing text in the table cell


let bookid2 = document.querySelector("#bookid2");
let bookname2 = document.querySelector("#bookname2");
let writername2 = document.querySelector("#writername2");
let pagesin2 = document.querySelector("#pagesin2");

bookid2.textContent = myLibrary[1].id;
bookname2.textContent = myLibrary[1].name; //overrides the existing text in the table cell
writername2.textContent = myLibrary[1].writer; //overrides the existing text in the table cell


displaysEachBook ();//calls the displaysEachBook function