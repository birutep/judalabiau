import React, {Component} from 'react';
import axios from 'axios';
import './Book.css';
import {BOOKS} from "../../../server_links/ServerLinks";
import {inject} from "mobx-react";

@inject('BookStore')
class Book extends Component {

    deleteBook = (e) => {
        e.preventDefault();
        axios.delete(BOOKS + this.props.myBook.id)
            .then(() => {
                this.props.BookStore.changeState();
            });
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
                <td>{this.props.myBook.eAvailable}</td>
                <td>{this.props.myBook.category}</td>
                <td><img src="./img/edit.png" alt="edit" /></td>
                <td><img src="./img/delete.png" alt="delete" onClick={this.deleteBook} /></td>
            </tr>
        )
    }
}

export default Book;
