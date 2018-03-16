import React, {Component} from 'react';
import BookRegForm from './components/book_reg_form/BookRegForm';
import Wrap from './components/wrap/wrap'
import BookList from "./components/books/book_list/BookList";

class App extends Component {
    render() {
        return (
            <Wrap>
                <BookRegForm/>
                <BookList/>
            </Wrap>
        );
    }
}

export default App;
