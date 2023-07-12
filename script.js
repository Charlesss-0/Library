let myLibrary = [
    'The Great Gatsby',
    'Harry Potter and the Philosopher\'s Stone',
    'The Hunger Games',
    'Game Of Thrones',
    'The Power Of Now',
    'JavaScript',
    'HTML and CSS Guide',
    'The Witcher',
    'The Theory Of Everything',
    'Alice In Wonderland',
    'The Little Prince'
]

const bookShelf = document.querySelector('#book-shelf')

function showAllBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = document.createElement('div')
        book.classList.add('book')
        book.innerHTML = `
            <h2>
                ${myLibrary[i]}
                <span>
                    <i class="fi fi-br-bookmark"></i>
                    <i class="fi fi-sr-circle-book-open"></i>
                    <i class="fi fi-sr-trash"></i>
                </span>
            </h2>
        `
        bookShelf.appendChild(book)
    }
}
showAllBooks()

// function Book() {} // Function constructor

// function addBookToLibrary() {} 