import React, {Component} from 'react';
import './BookList.css';
import Book from "../book_for_list/Book";
import {BOOKS} from "../../../server_links/ServerLinks";
import axios from 'axios';
import {inject, observer} from "mobx-react";

@inject('BookStore')
@observer
class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        this.getAllBooks();
    }

    componentWillReceiveProps() {
        this.getAllBooks();
    }

    getAllBooks() {
        axios.get(BOOKS).then(response => this.setState({books: response.data}));
    }

    render() {
        const booksAsComponents = this.state.books.map(book => {
            return <Book key={book.id} myBook={book}/>;
        });

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>authors</th>
                        <th>releaseDate</th>
                        <th>isbn</th>
                        <th>price</th>
                        <th>description</th>
                        <th>photopath</th>
                        <th>count</th>
                        <th>rating</th>
                        <th>ratingCount</th>
                        <th>eAvailable</th>
                        <th>category</th>
                        <th />
                        <th />
                    </tr>
                    </thead>

                    <tbody>
                    {booksAsComponents}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default BookList;