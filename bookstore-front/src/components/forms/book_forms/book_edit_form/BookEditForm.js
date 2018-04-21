import React, {Component} from "react";
import axios from "axios/index";
import {inject, observer} from "mobx-react";
import {BOOKS} from "../../../../server_links/ServerLinks";
import {Button} from "primereact/components/button/Button";

@inject("bookStore")
@observer
class BookRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyBook: {
                eAvailable: false,
                rating: 0,
                ratingCount: 0,
                title: "",
                releaseYear: "",
                isbn: "",
                price: "",
                category: "Apsakymas",
                count: "",
                photopath: "",
                description: "",
                authors: "",
                id: ""
            },
            eAvailable: this.props.bookStore.bookToEdit.eAvailable,
            rating: this.props.bookStore.bookToEdit.rating,
            ratingCount: this.props.bookStore.bookToEdit.ratingCount,
            title: this.props.bookStore.bookToEdit.title,
            releaseYear: this.props.bookStore.bookToEdit.releaseYear,
            isbn: this.props.bookStore.bookToEdit.isbn,
            price: this.props.bookStore.bookToEdit.price,
            category: this.props.bookStore.bookToEdit.category,
            count: this.props.bookStore.bookToEdit.count,
            photopath: this.props.bookStore.bookToEdit.photopath,
            description: this.props.bookStore.bookToEdit.description,
            authors: this.props.bookStore.bookToEdit.authors,
            id: this.props.bookStore.bookToEdit.id
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.updateBook = this.updateBook.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({
            eAvailable: this.props.bookStore.bookToEdit.eAvailable,
            rating: this.props.bookStore.bookToEdit.rating,
            ratingCount: this.props.bookStore.bookToEdit.ratingCount,
            title: this.props.bookStore.bookToEdit.title,
            releaseYear: this.props.bookStore.bookToEdit.releaseYear,
            isbn: this.props.bookStore.bookToEdit.isbn,
            price: this.props.bookStore.bookToEdit.price,
            category: this.props.bookStore.bookToEdit.category,
            count: this.props.bookStore.bookToEdit.count,
            photopath: this.props.bookStore.bookToEdit.photopath,
            description: this.props.bookStore.bookToEdit.description,
            authors: this.props.bookStore.bookToEdit.authors,
            id: this.props.bookStore.bookToEdit.id
        });
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleCheckbox() {
        this.setState({eAvailable: !this.state.eAvailable});
    }

    handleSubmit(event) {
        alert('"' + this.state.title + '" pakeista informacija.');
        event.preventDefault();
        // alert(
        //   `Selected file - ${this.fileInput.files[0].name}`
        // );

        // const data = new FormData(event.target);
        // fetch('/api/book-reg-form-submit-url', {
        //   method: 'POST',
        //   body: data,
        // });
    }

    updateBook() {
        console.log(
            "siunciam updeitui " +
            this.state.price +
            " tipas " +
            typeof this.state.price
        );
        console.log("adresu http://localhost:8080/books/" + this.state.id);
        axios
            .put(BOOKS + this.state.id, {
                eAvailable: this.state.eAvailable,
                rating: this.state.rating,
                ratingCount: this.state.ratingCount,
                title: this.state.title,
                releaseYear: this.state.releaseYear,
                isbn: this.state.isbn,
                price: this.state.price === "" ? "-1" : this.state.price,
                category: this.state.category,
                count: this.state.count,
                photopath: this.state.photopath,
                description: this.state.description,
                authors: this.state.authors,
                id: this.state.id
            })
            .then(() => {
                this.props.bookStore.changeState();
                this.props.bookStore.editBook(this.state.emptyBook);
            })
            .catch(function (error) {
                console.log("Klaida redaguojant knygą" + error);
            });
    }

    render() {
        return (
            <div className="reg_form">
                <form onSubmit={this.handleSubmit}>
                    <h3>Knygos kurios id {this.state.id} redagavimas</h3>
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
                    <br/>

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
                    <br/>

                    <label>
                        Leidimo metai:
                        <input
                            name="released"
                            placeholder="Įveskite knygos leidimo metus"
                            className="placeholder"
                            type="text"
                            pattern="^\d{4}$"
                            value={this.state.releaseYear}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/>

                    <label>
                        ISBN:
                        <input
                            name="isbn"
                            placeholder="Įveskite ISBN"
                            className="placeholder"
                            required
                            type="text"
                            minLength="10"
                            maxLength="13"
                            value={this.state.isbn}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/>

                    <label>
                        Kaina:
                        <input
                            name="price"
                            placeholder="Įveskite kainą"
                            className="placeholder"
                            type="text"
                            pattern="\d+?\.\d{1,2}\s*?$|^[1-9]\d*$"
                            value={
                                this.state.price >= 0 ? this.state.price : null
                            }
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/>

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
                            <option value="esė">Esė, publicistika</option>
                            <option value="dienorasciai">
                                Dienoraščiai, laiškai ir memuarai
                            </option>
                            <option value="fantastika">Fantastika</option>
                            <option value="istorinis">Istorinis romanas</option>
                            <option value="klasika">Klasika</option>
                            <option value="meiles">Meilės romanas</option>
                            <option value="modernas">
                                Modernioji literatūra
                            </option>
                            <option value="poezija">Poezija</option>
                            <option value="siaubo">Siaubo romanas</option>
                            <option value="vaikams">Vaikų literatūra</option>
                        </select>
                    </label>
                    <br/>

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
                    <br/>

                    <label>
                        Viršelio nuotrauka:
                        <input
                            name="photopath"
                            placeholder="Nurodykite kelią iki nuotraukos"
                            type="text"
                            value={this.state.photopath}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/>

                    <label>
                        Elektroninė knyga:
                        <input
                            name="e_available"
                            type="checkbox"
                            className="checkbox"
                            value={this.state.e_available}
                            onChange={this.handleCheckbox}
                        />
                    </label>
                    <br/>

                    <label>
                        Aprašymas:
                        <textarea
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br/>
                    <Button label="Pakeisti" onClick={this.updateBook}/>
                </form>
            </div>
        );
    }
}

export default BookRegForm;
