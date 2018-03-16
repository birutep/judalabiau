import React, { Component } from 'react';
import './BookList.css';
import axios from 'axios';
import Book from "../book_for_list/Book";

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

    getAllBooks() {
        axios.get("http://localhost:8080/books").then(response => this.setState({books: response.data}));
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