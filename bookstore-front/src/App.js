import React, {Component} from 'react';
import BookRegForm from './components/book_forms/book_reg_form/BookRegForm';
import Wrap from './components/wrap/wrap'
import BookList from "./components/books/book_list/BookList";
import BookEditForm from './components/book_forms/book_edit_form/BookEditForm'

class App extends Component {
    render() {
        return (
            <Wrap>
                <BookRegForm/>
                <BookList/>
                <BookEditForm book="hm"/>
            </Wrap>
        );
    }
}

export default App;
