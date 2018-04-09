import React, { Component } from "react";
import axios from "axios";
//custom elementai
import Book from "./one_book/Book";
import { BOOKS } from "../../../server_links/ServerLinks";
import SubHeader from "../../layout/sub_header/SubHeader";
import SubSubHeader from "../../layout/sub_header/sub_sub_header/SubSubHeader";

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
        axios
            .get(BOOKS)
            .then(response => this.setState({ books: response.data }));
    }

    render() {
        const booksAsComponents = this.state.books.map(book => {
            return <Book key={book.id} myBook={book} />;
        });

        return (
            <div>
                <SubHeader label="ALL BOOKS" />
                <SubSubHeader />
                <div className="books">
                    <div className="all_books_for_user">
                        <div className="all_books_for_user_area">
                            <div className="all_books_for_user_girdarea">
                                {booksAsComponents}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookList;
