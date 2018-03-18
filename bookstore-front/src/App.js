import React, {Component} from 'react';
import BookRegForm from './components/book_reg_form/BookRegForm';
import Wrap from './components/wrap/wrap'
import BookList from "./components/books/book_list/BookList";
import book from './components/books/book_for_list/Book';
import {inject, observer} from "mobx-react";

@inject('BookStore')
@observer
class App extends Component {
    render() {
        const {BookStore} = this.props;

        return (
            <Wrap>
                <BookRegForm/>
                <BookList bookStatus={book} changed={BookStore.changed}/>
            </Wrap>
        );
    }
}

export default App;
