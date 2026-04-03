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




let bookAdderButton = document.querySelector("#bookAdderButton");//selecting the larger button not the form button
let formContainer = document.querySelector("#bookFormContainer");//selecting the form to be filled by the user

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

        let deleteBtn = document.createElement("button");//creates a button
        deleteBtn.textContent = "Delete";//adding text to the button
        deleteBtn.classList.add("deleteButton");//adding class name to the button



        deleteCell.appendChild(deleteBtn);//appending the button to its cell


        row.appendChild(idCell);//appending cells to the row
        row.appendChild(nameCell);//appending cells to the row
        row.appendChild(writerCell);//appending cells to the row
        row.appendChild(pageCell);//appending cells to the row
        row.appendChild(deleteCell);//appending cells to the row


        tableBody.appendChild(row);//appending row to the table body
        
    })
    
}





let bookForm = document.querySelector("#bookForm");
//action to happen when add book button is clicked after filling the data
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();


    let name = document.querySelector("#bookNameInput").value;//the variables have the values user entered
    let writer = document.querySelector("#writerInput").value;//the variables have the values user entered
    let pages = document.querySelector("#pagesInput").value;//the variables have the values user entered

    addBookToLibrary(name, writer, pages);//calling function with input values stored in the variable above


    renderlibrary();//calls renderlibrary function which creates rows and adds data to rows and created the delete button against each row
    bookForm.reset();//clears the form 
    formContainer.style.display = "none";


    
});

