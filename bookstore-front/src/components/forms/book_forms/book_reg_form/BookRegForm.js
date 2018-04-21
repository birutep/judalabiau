import React, { Component } from "react";
import axios from "axios/index";
import { inject } from "mobx-react";
import { BOOKS } from "../../../../server_links/ServerLinks";
import { Button } from "primereact/components/button/Button";

@inject("BookStore")
class BookRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            authors: "",
            released: "",
            isbn: "",
            price: "",
            category: "Apsakymas",
            count: "",
            e_available: false,
            photopath: "",
            description: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.saveBook = this.saveBook.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleCheckbox() {
        this.setState({ e_available: !this.state.e_available });
    }

    handleSubmit(event) {
        alert('"' + this.state.title + '" užregistruota Knygų parduotuvėje.');
        event.preventDefault();
    }

    saveBook(e) {
        // Kažkodėl šitas preventDefault sugriauna Front validaciją :(
        e.preventDefault();
        axios
            .post(BOOKS, {
                title: this.state.title,
                authors: this.state.authors,
                releaseYear: this.state.released,
                isbn: this.state.isbn,
                price: this.state.price === "" ? -1 : this.state.price,
                category: this.state.category,
                count: this.state.count,
                e_available: this.state.e_available,
                photopath: this.state.photopath,
                description: this.state.description
            })
            .then(() => {
                this.props.BookStore.changeState();
                this.setState({
                    title: "",
                    authors: "",
                    released: "",
                    isbn: "",
                    price: "",
                    category: "Apsakymas",
                    count: "",
                    e_available: this.state.e_available,
                    photopath: "",
                    description: ""
                });
            })
            .catch(function(error) {
                console.log("Klaida įvedant knygą" + error);
            });
    }

    render() {
        // const { title, authors, isbn, category, count } = this.state;
        // const isEnabled =
        //     authors.length > 0 &&
        //     title.length > 0 &&
        //     isbn > 0 &&
        //     category > 0 &&
        //     count > 0;
        return (
            <div className="reg_form">
                <form onSubmit={this.handleSubmit}>
                    <h3>Naujos knygos registravimas</h3>
                    <label>
                        Knygos pavadinimas:
                        <input
                            name="title"
                            placeholder="Įveskite knygos pavadinimą"
                            className="placeholder"
                            required
                            type="text"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Autorius:
                        <input
                            name="authors"
                            placeholder="Įveskite autoriaus vardą ir pavardę arba slapyvardį"
                            className="placeholder"
                            required
                            type="text"
                            value={this.state.authors}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Leidimo metai:
                        <input
                            name="released"
                            placeholder="Įveskite knygos leidimo metus"
                            className="placeholder"
                            type="text"
                            pattern="^\d{4}$"
                            value={this.state.released}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        ISBN:
                        <input
                            name="isbn"
                            placeholder="Įveskite ISBN"
                            className="placeholder"
                            required
                            type="text"
                            pattern="^\d{10}$|^\d{13}$"
                            value={this.state.isbn}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Kaina:
                        <input
                            name="price"
                            placeholder="Įveskite kainą"
                            className="placeholder"
                            type="text"
                            pattern="\d+?\.\d{1,2}\s*?$|^[1-9]\d*$"
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Kategorija:
                        <select
                            name="category"
                            required
                            value={this.state.category}
                            onChange={this.handleChange}
                        >
                            <option value="apsakymai">Apsakymas</option>
                            <option value="biografinis">
                                Biografija, autobiografija
                            </option>
                            <option value="detektyvinis">
                                Detektyvinis romanas
                            </option>
                            <option value="ese">Esė, publicistika</option>
                            <option value="dienoraščiai">
                                Dienoraščiai, laiškai ir memuarai
                            </option>
                            <option value="fantastika">Fantastika</option>
                            <option value="istorinis">Istorinis romanas</option>
                            <option value="klasika">Klasika</option>
                            <option value="meilės">Meilės romanas</option>
                            <option value="modernas">
                                Modernioji literatūra
                            </option>
                            <option value="poezija">Poezija</option>
                            <option value="siaubo">Siaubo romanas</option>
                            <option value="vaikams">Vaikų literatūra</option>
                        </select>
                    </label>
                    <br />

                    <label>
                        Likutis sandėlyje:
                        <input
                            name="count"
                            placeholder="Įveskite kiekį"
                            className="placeholder"
                            required
                            pattern="[0-9]*"
                            type="text"
                            value={this.state.count}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Viršelio nuotrauka:
                        <input
                            name="photopath"
                            placeholder="Nurodykite kelią iki nuotraukos"
                            className="placeholder"
                            type="text"
                            value={this.state.photopath}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Elektroninė knyga:
                        <input
                            name="e_available"
                            type="checkbox"
                            className="checkbox"
                            value={this.state.e_available}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <label>
                        Aprašymas:
                        <textarea
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <Button
                        // title="Užpildykite privalomus laukus"
                        // disabled={!isEnabled}
                        label="Registruoti"
                        onClick={this.saveBook}
                    />
                </form>
            </div>
        );
    }
}

export default BookRegForm;
