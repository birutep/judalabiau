import React, {Component} from "react";
import axios from "axios";
//custom elementai
import Book from "./one_book/Book";
import {BOOKS} from "../../../server_links/ServerLinks";
import SubHeader from "../../layout/sub_header/SubHeader";
import {inject, observer} from "mobx-react";

@inject("bookStore")
@observer
class BookList extends Component {
    constructor() {
        super();
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
        axios
            .get(BOOKS)
            .then(response => this.setState({books: response.data}));
    }

    render() {
        const booksAsComponents = this.state.books.map(book => {
            return <Book key={book.id} myBook={book}/>;
        });

        return (
            <div className="books">
                <SubHeader label="Visos knygos"/>

                <table>
                    <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Pavadinimas</th>
                        <th>Autorius</th>
                        <th>Kaina</th>
                        <th>Likutis</th>
                        <th>Kategorija</th>
                        <th/>
                        <th/>
                    </tr>
                    </thead>

                    <tbody>{booksAsComponents}</tbody>
                </table>
            </div>
        );
    }
}

export default BookList;
