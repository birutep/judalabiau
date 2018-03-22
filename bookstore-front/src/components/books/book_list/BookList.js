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
                        <th>ID</th>
                        <th>Pavadinimas</th>
                        <th>Autorius</th>
                        <th>Leidimo metai</th>
                        <th>ISBN</th>
                        <th>Kaina</th>
                        <th>Aprašymas</th>
                        <th>Nuotrauka</th>
                        <th>Likutis</th>
                        <th>Reitingas</th>
                        <th>Balsų skaičius</th>
                        <th>Elektorinins formatas</th>
                        <th>Kategorija</th>
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