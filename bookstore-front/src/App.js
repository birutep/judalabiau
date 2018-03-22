import React, {Component} from 'react';
import BookRegForm from './components/book_forms/book_reg_form/BookRegForm';
import Wrap from './components/wrap/wrap'
import BookList from "./components/books/book_list_for_admin/BookList";
import book from './components/books/book_list_for_admin/one_book/Book';
import {inject, observer} from "mobx-react";
import BookEditForm from './components/book_forms/book_edit_form/BookEditForm'

@inject('BookStore')
@observer
class App extends Component {
    render() {
        const {BookStore} = this.props;

        return (
            <Wrap>
                <BookRegForm/>
                <BookList bookStatus={book} changed={BookStore.changed}/>
                <BookEditForm book={BookStore.bookToEdit} changed={BookStore.changed}/>
            </Wrap>
        );
    }
}

export default App;
