import {action, computed, observable} from 'mobx'

class BookStore {
    @observable changed = false;
    @observable bookToEdit = {
        eAvailable: false,
        title: "",
        releaseYear: "",
        isbn: "",
        price: "",
        category: "Apsakymas",
        count: "",
        photopath: "",
        description: "",
        authors: "",
        id: ""
    };

    @action changeState = () => {
        this.changed = !this.changed;
    };

    @action editBook = (book) => {
        this.bookToEdit.title = book.title;
        this.bookToEdit.releaseYear = book.releaseYear;
        this.bookToEdit.isbn = book.isbn;
        this.bookToEdit.price = book.price;
        this.bookToEdit.category = book.category;
        this.bookToEdit.count = book.count;
        this.bookToEdit.eAvailable = book.eAvailable;
        this.bookToEdit.photopath = book.photopath;
        this.bookToEdit.description = book.description;
        this.bookToEdit.authors = book.authors;
        this.bookToEdit.id = book.id;
    };

    @computed get watchChanged() {
        return this.changed;
    };
}

const bookStore = new BookStore();

export default bookStore;