import React, {Component} from 'react';
import axios from 'axios';
import './Book.css';
import {BOOKS} from "../../../server_links/ServerLinks";
import {inject} from "mobx-react";

@inject('BookStore')
class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bookEdit: {
                title: props.myBook.title,
                released: props.myBook.released,
                isbn: props.myBook.isbn,
                price: props.myBook.price,
                category: props.myBook.category,
                count: props.myBook.count,
                e_available: props.myBook.e_available,
                photopath: props.myBook.photopath,
                description: props.myBook.description,
                authors: props.myBook.authors,
                id: props.myBook.id
            }
        }
    }

    deleteBook = (e) => {
        e.preventDefault();
        axios.delete(BOOKS + this.props.myBook.id)
            .then(() => {
                this.props.BookStore.changeState();
            });
    };

    editBook = (book) => {
        this.props.BookStore.editBook(book);
        this.props.BookStore.changeState();
    };

    render() {
        return (
            <tr>
                <td>{this.props.myBook.id}</td>
                <td>{this.props.myBook.title}</td>
                <td>{this.props.myBook.authors}</td>
                <td>{this.props.myBook.releaseDate}</td>
                <td>{this.props.myBook.isbn}</td>
                <td>{this.props.myBook.price}</td>
                <td>{this.props.myBook.description}</td>
                <td>{this.props.myBook.photopath}</td>
                <td>{this.props.myBook.count}</td>
                <td>{this.props.myBook.rating}</td>
                <td>{this.props.myBook.ratingCount}</td>
                <td>{this.props.myBook.eAvailable ? 'taip' : 'ne'}</td>
                <td>{this.props.myBook.category}</td>
                <td><img src="./img/edit.png" alt="edit" onClick={() => this.editBook(this.props.myBook)}/></td>
                <td><img src="./img/delete.png" alt="delete" onClick={this.deleteBook}/></td>
            </tr>
        )
    }
}

export default Book;
