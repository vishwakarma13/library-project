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




let bookAdderButton = document.querySelector("#bookAdderButton");
let formContainer = document.querySelector("#bookFormContainer");

bookAdderButton.addEventListener("click", () => {
    formContainer.style.display = "block";//causes the form to show when click to add new book button is clicked
});


//the function to render the library from the array to webpage
function renderlibrary() {
    let tableBody = document.querySelector("#tableBody");
    tableBody.innerHTML = "";// to clear the table
    myLibrary.forEach(book => {


        let row = document.createElement("tr");//creates row

        let idCell = document.createElement("td");//creates cell
        let nameCell = document.createElement("td");//creates cell
        let writerCell = document.createElement("td");//creates cell
        let pageCell = document.createElement("td");//creates cell
        let deleteCell = document.createElement("td");//creates cell


        idCell.textContent = book.id;//adds content to cell
        nameCell.textContent = book.name;//adds content to cell
        writerCell.textContent = book.writer;//adds content to cell
        pageCell.textContent = book.pages;//adds content to cell


        
        
    })
    
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

