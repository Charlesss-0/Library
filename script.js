const bookFormEl = document.querySelector('#book-form')
const bookShelf = document.querySelector('#book-shelf')

let myLibrary = []
let bookmarkedBooks = []

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

    const titleInput = document.querySelector('.title-input')
    const authorInput = document.querySelector('.author-input')
    const pagesInput = document.querySelector('.pages-input')
    const editionInput = document.querySelector('.edition-input')
    const readStatus = document.querySelector('input[type="checkbox"]')

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

function addBookToBookmarks(event) {
    const btn = event.target
    const index = parseInt(btn.dataset.index)
    const book = myLibrary[index]

    bookmarkedBooks.push(book)

    showBookmarks()
}

bookFormEl.addEventListener('submit', addBookToLibrary)

function showAllBooks() {
    bookShelf.innerHTML = ''
    myLibrary.forEach((book, index) => {
        const bookEl = document.createElement('div')
        bookEl.classList.add('book')
        bookEl.innerHTML = `
            <div>
                <div id="book-info-wrapper">
                    <p>Title: <span>${book.title}</span</p>
                    <p>Author: <span>${book.author}</span></p>
                    <p>Pages: <span>${book.pages}</span></p>
                    <p>Edition: <span>${book.edition}</span></p>
                    <p>Status: <span>${book.read ? 'Read' : 'Not Read'}</span></p>
                </div>
                <span>
                    <i class="fi fi-br-bookmark save" data-index="${index}"></i>
                    <i class="fi fi-sr-trash remove" data-index="${index}"></i>         
                </span>
            </div>
        `
        bookShelf.appendChild(bookEl)
    })
}

const addNewBook = document.querySelector('#add-new-book')
const cancelBtn = document.querySelectorAll('.cancel-button')
const newBookForm = document.querySelector('.new-book-form')

const bookmarkEl = document.querySelector('#bookmarks')
const favBooksEl = document.querySelector('.fav-books')
const savedBooksEl = document.querySelector('.saved-books')

function showForm() {
    newBookForm.style.display = 'block'
    document.body.classList.add('show-before')
}

function hideForm() {
    newBookForm.style.display = 'none'
    document.body.classList.remove('show-before')
    favBooksEl.style.display = 'none'
}

function showBookmarks() {
    savedBooksEl.innerHTML = ''
    bookmarkedBooks.forEach((book) => {
        const bookmarkedBookEl = document.createElement('div')
        bookmarkedBookEl.classList.add('book', 'saved-books-info')
        bookmarkedBookEl.innerHTML = `
            <div>
                <div id="book-info-wrapper">
                    <p>Title: <span>${book.title}</span></p>
                    <p>Author: <span>${book.author}</span></p>
                    <p>Pages: <span>${book.pages}</span></p>
                    <p>Edition: <span>${book.edition}</span></p>
                    <p>Status: <span>${book.read ? 'Read' : 'Not Read'}</span></p>
                </div>
                <span>
                    <i class="fi fi-sr-bookmark save"></i>
                </span>
            </div>
        `
        savedBooksEl.appendChild(bookmarkedBookEl)
    })
}

bookmarkEl.addEventListener('click', () => {
    favBooksEl.style.display = 'block'
    document.body.classList.add('show-before')
})
addNewBook.addEventListener('click', showForm)
cancelBtn.forEach(btn => {
    btn.addEventListener('click', hideForm)
})

function removeBookFromLibrary(event) {
    const btn = event.target
    const index = parseInt(btn.dataset.index)
    myLibrary.splice(index, 1)
    showAllBooks()
}

bookShelf.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove')) {
        removeBookFromLibrary(event)
    } else if (event.target.classList.contains('save')) {
        addBookToBookmarks(event)
    }
})
