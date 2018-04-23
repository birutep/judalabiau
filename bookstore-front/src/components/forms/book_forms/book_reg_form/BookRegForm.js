import React, { Component, Fragment } from "react";
import axios from "axios/index";
import { inject, observer } from "mobx-react";
import { BOOKS } from "../../../../server_links/ServerLinks";
import { Button } from "primereact/components/button/Button";
import { Messages } from "primereact/components/messages/Messages";
import {
    FormWithConstraints,
    FieldFeedback
} from "react-form-with-constraints";
import {
    FieldFeedbacks,
    FormGroup,
    FormControlLabel,
    FormControlInput,
} from "react-form-with-constraints-bootstrap4";
import SubHeader from "../../../layout/sub_header/SubHeader";

@inject("bookStore")
@observer
class BookRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.saveBook = this.saveBook.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.showError = this.showError.bind(this);
    }

    handleChange(event) {
        const target = event.currentTarget;
        this.form.validateFields(target);
        this.setState({
            [target.name]: target.value,
            submitButtonDisabled: !this.form.isValid()
        });
    }

    handleCheckbox() {
        this.setState({ eAvailable: !this.state.eAvailable });
    }

    showSuccess() {
        this.messages.show({
            severity: "success",
            summary:
                '"' + this.state.title + '" užregistruota Knygų parduotuvėje.'
        });
    }

    showError() {
        this.messages.show({
            sticky: true,
            severity: "error",
            summary: "Klaida registruojant knygą!"
        });
    }

    handleSubmit(event) {
        // alert('"' + this.state.title + '" užregistruota Knygų parduotuvėje.');
        event.preventDefault();
    }

    saveBook() {
        this.form.validateFields();
        this.setState({ submitButtonDisabled: !this.form.isValid() });
        if (this.form.isValid()) {
            let self = this;
            axios
                .post(BOOKS, {
                    eAvailable: this.state.eAvailable,
                    rating: this.state.rating,
                    ratingCount: this.state.ratingCount,
                    title: this.state.title,
                    authors: this.state.authors,
                    releaseYear: this.state.releaseYear,
                    isbn: this.state.isbn,
                    price: this.state.price === "" ? -1 : this.state.price,
                    category: this.state.category,
                    count: this.state.count,
                    photopath: this.state.photopath,
                    description: this.state.description
                })
                .then(response => {
                    this.props.bookStore.changeState();
                    if (response.status === 200) {
                        this.showSuccess();
                        this.setState({
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
                        });
                    }
                })
                .catch(function(error) {
                    self.showError();
                });
        }
    }

    render() {
        return (
            <Fragment>
                <SubHeader label="Naujos knygos registravimas" />
                <div className="reg_form">
                    <FormWithConstraints
                        ref={formWithConstraints =>
                            (this.form = formWithConstraints)
                        }
                        onSubmit={this.handleSubmit}
                        // noValidate
                    >
                        <FormGroup for="title">
                            <FormControlLabel htmlFor="title">
                                Knygos pavadinimas:
                                <sup className="required">*</sup>
                            </FormControlLabel>
                            <FormControlInput
                                type="text"
                                id="title"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                                placeholder="Įveskite knygos pavadinimą"
                                required
                                className="placeholder"
                            />
                            <FieldFeedbacks for="title" show="all">
                                <FieldFeedback when="valueMissing">
                                    Įveskite knygos pavadinimą
                                </FieldFeedback>
                            </FieldFeedbacks>
                        </FormGroup>

                        <FormGroup for="authors">
                            <FormControlLabel htmlFor="authors">
                                Autorius: <sup className="required">*</sup>
                            </FormControlLabel>
                            <FormControlInput
                                type="text"
                                id="authors"
                                name="authors"
                                value={this.state.authors}
                                onChange={this.handleChange}
                                placeholder="Įveskite autoriaus vardą ir pavardę arba slapyvardį"
                                required
                                className="placeholder"
                            />
                            <FieldFeedbacks for="authors" show="all">
                                <FieldFeedback when="valueMissing">
                                    Įveskite autoriaus vardą ir pavardę arba
                                    slapyvardį{" "}
                                </FieldFeedback>
                            </FieldFeedbacks>
                        </FormGroup>

                        <FormGroup for="releaseYear">
                            <FormControlLabel htmlFor="releaseYear">
                                Leidimo metai:
                            </FormControlLabel>
                            <FormControlInput
                                type="text"
                                id="releaseYear"
                                name="releaseYear"
                                value={this.state.releaseYear}
                                onChange={this.handleChange}
                                placeholder="Įveskite knygos leidimo metus"
                                className="placeholder"
                            />
                            <FieldFeedbacks for="releaseYear" show="all">
                                <FieldFeedback
                                    warning
                                    when={value => !/^\d{4}$/.test(value)}
                                >
                                    Įveskite tik metus, pvz. 2018
                                </FieldFeedback>
                            </FieldFeedbacks>
                        </FormGroup>

                        <FormGroup for="isbn">
                            <FormControlLabel htmlFor="isbn">
                                ISBN: <sup className="required">*</sup>
                            </FormControlLabel>
                            <FormControlInput
                                type="text"
                                id="isbn"
                                name="isbn"
                                value={this.state.isbn}
                                onChange={this.handleChange}
                                placeholder="Įveskite ISBN"
                                required
                                className="placeholder"
                            />
                            <FieldFeedbacks for="isbn" show="all">
                                <FieldFeedback when="valueMissing">
                                    Įveskite ISBN (10 arba 13 skaitmenų formatu)
                                </FieldFeedback>
                                <FieldFeedback
                                    // warning
                                    when={value =>
                                        !/^\d{10}$|^\d{13}$/.test(value)
                                    }
                                >
                                    ISBN turi sudaryti 10 arba 13 skaitmenų.
                                </FieldFeedback>
                                <FieldFeedback
                                    // warning
                                    when={value => /[a-zA-ZĀ-ž\s]+/.test(value)}
                                >
                                    ISBN neturėtų būti raidžių.
                                </FieldFeedback>
                            </FieldFeedbacks>
                        </FormGroup>

                        <FormGroup for="price">
                            <FormControlLabel htmlFor="price">
                                Kaina: <sup className="required">*</sup>
                            </FormControlLabel>
                            <FormControlInput
                                type="price"
                                id="price"
                                name="price"
                                value={this.state.price}
                                onChange={this.handleChange}
                                placeholder="Įveskite kainą"
                                required
                                className="placeholder"
                            />
                            <FieldFeedbacks for="price" show="all">
                                <FieldFeedback when="valueMissing">
                                    Įveskite kainą
                                </FieldFeedback>
                                <FieldFeedback
                                    when={value =>
                                        !/\d+?\.\d{1,2}\s*?$|^[1-9]\d*$/.test(
                                            value
                                        )
                                    }
                                >
                                    Neteisingai įvedėte kainą. Kainą gali
                                    sudaryti tik skaičiai.
                                </FieldFeedback>
                            </FieldFeedbacks>
                        </FormGroup>

                        <FormGroup for="category">
                            <FormControlLabel htmlFor="category">
                                Kategorija: <sup className="required">*</sup>
                            </FormControlLabel>
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
                                <option value="istorinis">
                                    Istorinis romanas
                                </option>
                                <option value="klasika">Klasika</option>
                                <option value="meilės">Meilės romanas</option>
                                <option value="modernas">
                                    Modernioji literatūra
                                </option>
                                <option value="poezija">Poezija</option>
                                <option value="siaubo">Siaubo romanas</option>
                                <option value="vaikams">
                                    Vaikų literatūra
                                </option>
                            </select>
                        </FormGroup>

                        <FormGroup for="count">
                            <FormControlLabel htmlFor="count">
                                Likutis sandėlyje:
                                <sup className="required">*</sup>
                            </FormControlLabel>
                            <FormControlInput
                                type="text"
                                id="count"
                                name="count"
                                value={this.state.count}
                                onChange={this.handleChange}
                                placeholder="Įveskite kiekį"
                                required
                                className="placeholder"
                            />
                            <FieldFeedbacks for="count" show="all">
                                <FieldFeedback when="valueMissing">
                                    Įveskite kiekį
                                </FieldFeedback>
                                <FieldFeedback
                                    when={value => !/^[0-9]\d*$/.test(value)}
                                >
                                    Neteisingai įvedėte kiekį. Kiekį gali
                                    sudaryti tik sveikieji skaičiai.
                                </FieldFeedback>
                            </FieldFeedbacks>
                        </FormGroup>

                        <FormGroup for="photopath">
                            <FormControlLabel htmlFor="photopath">
                                Viršelio nuotrauka:
                            </FormControlLabel>
                            <FormControlInput
                                type="text"
                                id="photopath"
                                name="photopath"
                                value={this.state.photopath}
                                onChange={this.handleChange}
                                placeholder="Nurodykite kelią iki nuotraukos"
                                className="placeholder"
                            />
                        </FormGroup>

                        <label>
                            Elektroninė knyga:
                            <input
                                name="eAvailable"
                                type="checkbox"
                                className="checkbox"
                                checked={this.state.eAvailable}
                                value={this.state.eAvailable}
                                onChange={this.handleCheckbox}
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
                        {/* <p className="required">
                        <sup>*</sup> Privalomi laukai
                    </p> */}
                        <Button
                            label="Registruoti"
                            disabled={this.state.submitButtonDisabled}
                            onClick={this.saveBook}
                        />
                        <Messages
                            ref={el => {
                                this.messages = el;
                            }}
                        />
                    </FormWithConstraints>
                </div>
            </Fragment>
        );
    }
}

export default BookRegForm;
