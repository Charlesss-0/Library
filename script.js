const bookFormEl = document.querySelector('#book-form')
const bookShelf = document.querySelector('#book-shelf')

const titleInput = document.querySelector('.title-input')
const authorInput = document.querySelector('.author-input')
const pagesInput = document.querySelector('.pages-input')
const editionInput = document.querySelector('.edition-input')
const readStatus = document.querySelector('input[type="checkbox"]')

let myLibrary = []

class BookInfo {
    constructor(title, author, pages, edition, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.edition = edition
        this.read = read
    }
}

function addBookToLibrary(event) {
    event.preventDefault()

    const title = titleInput.value
    const author = authorInput.value
    const pages = pagesInput.value
    const edition = editionInput.value
    const read = readStatus.checked

    const book = new BookInfo(title, author, pages, edition, read)

    myLibrary.push(book)
    showAllBooks()

    newBookForm.style.display = 'none'
    document.body.classList.remove('show-before')
    bookFormEl.reset()
}
bookFormEl.addEventListener('submit', addBookToLibrary)

function showAllBooks() {
    bookShelf.innerHTML = ''
    myLibrary.forEach((book) => {
        const bookEl = document.createElement('div')
        bookEl.classList.add('book')
        bookEl.innerHTML = `
            <h2>
                Title: ${book.title}<br>
                Author: ${book.author}<br>
                Pages: ${book.pages}<br>
                Edition: ${book.edition}<br>
                Status: ${book.read ? 'Read' : 'Not Read'}
                <span>
                    <i class="fi fi-br-bookmark save"></i>
                    <i class="fi fi-sr-trash remove" data-index="${myLibrary.indexOf(book)}"></i>         
                </span>
            </h2>
        `
        bookShelf.appendChild(bookEl)
    })
}

const addNewBook = document.querySelector('#add-new-book')
const cancelBtn = document.querySelector('.cancel-button')
const newBookForm = document.querySelector('.new-book-form')

function showForm() {
    newBookForm.style.display = 'block'
    document.body.classList.add('show-before')
}

function hideForm() {
    newBookForm.style.display = 'none'
    document.body.classList.remove('show-before')
}

addNewBook.addEventListener('click', showForm)
cancelBtn.addEventListener('click', hideForm)

function removeBookFromLibrary(event) {
    const btn = event.target
    const index = parseInt(btn.dataset.index)

    myLibrary.splice(index, 1)
    showAllBooks()
}

bookShelf.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        removeBookFromLibrary(event)
    }
})

