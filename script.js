const myLibrary = []; // would store the collection of Book objects

function Book (name, writer, totalPages) { //the constructor function
    this.id = crypto.randomUUID();
    this.name = name;
    this.writer = writer;
    this.pages = totalPages;
}

function addBookToLibrary (name, writer, totalPages) {
    let bookObject = new Book (name, writer, totalPages); //calling the book constructor
    myLibrary.push(bookObject); //bookObject is pushed into array myLibrary
}   

addBookToLibrary("Chacha Chaudhary", "Chacha Comics", "120"); //manually passing values to function
addBookToLibrary("Lotpot", "Lotpot Comics", "205"); //manually passing values to function


//selectors given variable name for dom manipulation
let bookId1 = document.querySelector("#bookId1");
let bookName1 = document.querySelector("#bookName1");
let writerName1 = document.querySelector("#writerName1");
let totalPages1 = document.querySelector("#totalPages1");

bookId1.textContent = myLibrary[0].id;
bookName1.textContent = myLibrary[0].name; //overrides the existing text in the table cell
writerName1.textContent = myLibrary[0].writer; //overrides the existing text in the table cell
totalPages1.textContent = myLibrary[0].pages;


//selectors given variable name for dom manipulation
let bookId2 = document.querySelector("#bookId2");
let bookName2 = document.querySelector("#bookName2");
let writerName2 = document.querySelector("#writerName2");
let totalPages2 = document.querySelector("#totalPages2");

bookId2.textContent = myLibrary[1].id;
bookName2.textContent = myLibrary[1].name; //overrides the existing text in the table cell
writerName2.textContent = myLibrary[1].writer; //overrides the existing text in the table cell
totalPages2.textContent = myLibrary[1].pages;



//event listener for adding the book
let bookAdderButton = document.querySelector("#bookAdderButton");

let formContainer = document.querySelector("#bookFormContainer");

bookAdderButton.addEventListener("click", () => {
    formContainer.style.display = "block";//causes the form to show when add book button is clicked
});


//the function to render the library from the array to webpage
function renderlibrary() {

}

let bookForm = document.querySelector("#bookForm");
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#bookNameInput").value;
    let writer = document.querySelector("#writerInput").value;
    let pages = document.querySelector("#pagesInput").value;

    addBookToLibrary(name, writer, pages);//calling function which  creates a book object and pushes it to array of books

//add renderlibrary function
// reset bookform
// form container display none
    
})

//even listener for deleting the book
let deleteButtons = document.querySelectorAll(".deleteButtons");
deleteButtons.forEach( singleBtn => {
    singleBtn.addEventListener("click", () =>{
        alert("You have clicked the delete button");
    });
});

