
//store list of books as a global variable
let books = []

window.onload = () => {
    fetch ("https://striveschool-api.herokuapp.com/books")
    //convert into json data
        .then(response => response.json())
    //get to the header
        .then(receivedBooks => {
            books = receivedBooks
            console.log(receivedBooks)
            displayBooks(receivedBooks)
        })
        .catch(error =>{
            console.log(error)
        })
}

function displayBooks(books){
    //target book-section
    let getBookSection = document.querySelector(".book-section .row")
    books.forEach(book => {
        getBookSection.innerHTML += 
        `<div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3 bookCard">
            <div class="card mx-1">
                <img class="card-img-top" src="${book.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class>${book.title}</h5>
                    <p class="card-text mb-0"><strong>Category: </strong> ${book.category}</p>
                    <p class="card-text"><strong>Price: </strong> ${book.price}€</p>
                    <button type="button" class="btn btn-warning removeThisBook" onclick="removeMe()">Remove</button>
                    <i class="fas fa-cart-plus" onclick="addToCart(${book.title})"></i>
                    <i class="fas fa-circle-notch"></i>            
                </div>
            </div>
        </div>`
    } )

}


// function addToCart(title){
//     //get the booklist id
//     let bookList = document.querySelector(`.${title}`)
//     console.log(bookList)
//     //target shopping list 
//     // let getShoppingList = document.querySelector(".shopping-cart modal-body")
//     // getShoppingList.appendChild(bookList)
// }

function removeMe(){
    let getAllRemoveButton = document.querySelectorAll(".removeThisBook")
    getAllRemoveButton.forEach((btn) => (btn.onclick = (event) =>{ 
            event.currentTarget.closest(".bookCard").remove()
        })
    )
}

function AddMe(){
    
}


    



