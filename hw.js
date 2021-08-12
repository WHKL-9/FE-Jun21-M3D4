
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
                    <h5 class="bookTitle">${book.title}</h5>
                    <p class="card-text mb-0"><strong>Category: </strong> ${book.category}</p>
                    <p class="card-text"><strong>Price: </strong> ${book.price}€</p>
                    <div class="card-button">
                        <button type="button" class="btn btn-success addThisBook" onclick="addMe()">Add to Cart</button>
                        <button type="button" class="btn btn-warning removeThisBook" onclick="removeMe()">Skip</button>
                    </div>
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

//this is not working yet || managed to get the card but not the title 
function addMe(){
    let getShoppingList = document.querySelector(".modal-body")
    let getAllCartButton = document.querySelectorAll(".addThisBook")
    getAllCartButton.forEach((btn) => (btn.onclick= (event)=>{
        console.log(event.currentTarget.closest(".card-body").innerHTML)
    })
    )
    // console.log(addBookToCart)
    // getShoppingList.appendChild(addBookToCart)
}

let getShoppingList = document.querySelector(".modal-body")



    



