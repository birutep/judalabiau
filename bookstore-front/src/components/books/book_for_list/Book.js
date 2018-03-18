import React, {Component} from 'react';
import axios from 'axios';
import css from'./Book.css';
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
                <td className={css.mini}>{this.props.myBook.id}</td>
                <td>{this.props.myBook.title}</td>
                <td>{this.props.myBook.authors}</td>
                <td>{this.props.myBook.releaseYear}</td>
                <td>{this.props.myBook.isbn}</td>
                <td className={css.mini}>{this.props.myBook.price===-1? 'anonsas':this.props.myBook.price}</td>
                <td>{this.props.myBook.description}</td>
                <td>{this.props.myBook.photopath}</td>
                <td className={css.mini}>{this.props.myBook.count}</td>
                <td className={css.mini}>{this.props.myBook.rating}</td>
                <td className={css.mini}>{this.props.myBook.ratingCount}</td>
                <td className={css.mini}>{this.props.myBook.eAvailable ? 'taip' : 'ne'}</td>
                <td>{this.props.myBook.category}</td>
                <td className={css.mini}><img src="./img/edit.png" alt="edit" /></td>
                <td className={css.mini}><img src="./img/delete.png" alt="delete" onClick={this.deleteBook} /></td>
            </tr>
        )
    }
}

export default Book;
