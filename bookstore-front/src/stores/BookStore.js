import {observable, action, computed} from 'mobx'

class BookStore {
    @observable changed = false;
    @observable bookToEdit = {
        title: '',
        released: '',
        isbn: '',
        price: '',
        category: 'Apsakymas',
        count: '',
        e_available: false,
        photopath: '',
        description: '',
        authors: '',
        id: ''
    };

    @action changeState = () => {
        this.changed = !this.changed;
    };

    @action editBook = (book) => {
        console.log(book);
        this.bookToEdit.title = book.title;
        this.bookToEdit.released = book.released;
        this.bookToEdit.isbn = book.isbn;
        this.bookToEdit.price = book.price;
        this.bookToEdit.category = book.category;
        this.bookToEdit.count = book.count;
        this.bookToEdit.e_available = book.e_available;
        this.bookToEdit.photopath = book.photopath;
        this.bookToEdit.description = book.description;
        this.bookToEdit.authors = book.authors;
        this.bookToEdit.id = book.id;
        console.log(this.bookToEdit.title);
    };

    @computed get watchChanged() {
        return this.changed;
    };
}

const store = new BookStore();

export default store;