import React, {Component} from "react";
import axios from "axios";
import {BOOKS} from "../../../../server_links/ServerLinks";
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";

@inject("bookStore")
@observer
class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookEdit: {
                title: props.myBook.title,
                releaseYear: props.myBook.releaseYear,
                isbn: props.myBook.isbn,
                price: props.myBook.price,
                category: props.myBook.category,
                count: props.myBook.count,
                eAvailable: props.myBook.eAvailable,
                photopath: props.myBook.photopath,
                description: props.myBook.description,
                authors: props.myBook.authors,
                id: props.myBook.id
            }
        };
    }

    deleteBook = e => {
        e.preventDefault();
        axios.delete(BOOKS + this.props.myBook.id).then(() => {
            this.props.bookStore.changeState();
        });
    };

    editBook = book => {
        this.props.bookStore.editBook(book);
        this.props.bookStore.changeState();
    };

    render() {
        return (
            <tr>
                <td>{this.props.myBook.isbn}</td>
                <td>{this.props.myBook.title}</td>
                <td>{this.props.myBook.authors}</td>

                <td className="mini">
                    {this.props.myBook.price === -1
                        ? "anonsas"
                        : this.props.myBook.price}
                </td>
                <td className="mini">{this.props.myBook.count}</td>
                <td>{this.props.myBook.category}</td>
                <td className="mini">
                    <Link to="/books/edit">
                        <i
                            className="fa fa-pencil fa-fw"
                            onClick={() => this.editBook(this.props.myBook)}
                        />
                    </Link>
                </td>
                <td className="mini">
                    <i
                        className="fa fa-trash-o fa-fw"
                        onClick={this.deleteBook}
                    />
                </td>
            </tr>
        );
    }
}

export default Book;
