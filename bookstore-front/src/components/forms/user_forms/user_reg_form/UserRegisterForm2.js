import React, { Component } from "react";
import axios from "axios";
import { USERS } from "../../../../server_links/ServerLinks";
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
    FormControlInput
} from "react-form-with-constraints-bootstrap4";

class UserRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fname: "",
            lname: "",
            password: "",
            passwordrepeat: "",
            role: 2,
            phone: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.saveUser = this.saveUser.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.showError = this.showError.bind(this);
    }

    handleChange(e) {
        const target = e.currentTarget;
        this.form.validateFields(target);
        this.setState({
            [target.name]: target.value,
            submitButtonDisabled: !this.form.isValid()
        });
    }

    handlePasswordChange(e) {
        this.form.validateFields("passwordConfirm");
        this.handleChange(e);
    }

    showSuccess() {
        this.messages.show({
            severity: "success",
            summary: "Pardavėjas užregistruotas!"
        });
    }

    showError() {
        this.messages.show({
            severity: "error",
            summary: "Klaida registruojant pardavėją!"
        });
    }

    // handleSubmit(event) {
    //     // alert(
    //     //     "Pardavėjas " +
    //     //         this.state.fname +
    //     //         " " +
    //     //         this.state.lname +
    //     //         " užregistruotas."
    //     // );
    //     event.preventDefault();
    // }

    handleSubmit(e) {
        if (this.state.password !== this.state.passwordrepeat) {
            return;
        }
        // e.preventDefault();
        this.form.validateFields();
        this.setState({ submitButtonDisabled: !this.form.isValid() });
        if (this.form.isValid()) {
            axios
                .post(USERS, {
                    email: this.state.email,
                    fName: this.state.fname,
                    lName: this.state.lname,
                    password: this.state.password,
                    address: this.state.address,
                    birthday: this.state.birthday,
                    role: this.state.role,
                    phone: this.state.phone
                })
                .then(response => {
                    if (response.status === 200) {
                        this.showSuccess();
                    } else {
                        this.showUnsuccess();
                    }
                    console.log(response.data);
                    console.log("User successfully added");
                })
                .catch(function(error) {
                    console.log(error);
                    // this.showUnsuccess();
                });
        }
    }

    // saveUser(e) {
    //     // ??? :(
    //     e.preventDefault();
    //     axios
    //         .post(USERS, {
    //             title: this.state.title,
    //             authors: this.state.authors,
    //             releaseYear: this.state.released,
    //             isbn: this.state.isbn,
    //             price: this.state.price === "" ? -1 : this.state.price,
    //             category: this.state.category,
    //             count: this.state.count,
    //             e_available: this.state.e_available,
    //             photopath: this.state.photopath,
    //             description: this.state.description
    //         })
    //         .then(() => {
    //             this.props.BookStore.changeState();
    //             this.setState({
    //                 title: "",
    //                 authors: "",
    //                 released: "",
    //                 isbn: "",
    //                 price: "",
    //                 category: "Apsakymas",
    //                 count: "",
    //                 e_available: this.state.e_available,
    //                 photopath: "",
    //                 description: ""
    //             });
    //         })
    //         .catch(function(error) {
    //             console.log("Klaida įvedant knygą" + error);
    //         });
    // }

    render() {
        return (
            <div className="reg_form">
                <FormWithConstraints
                    ref={formWithConstraints =>
                        (this.form = formWithConstraints)
                    }
                    onSubmit={this.handleSubmit}
                    noValidate
                >
                    <h3>Registruoti pardavėją</h3>
                    <FormGroup for="fname">
                        <FormControlLabel htmlFor="fname">
                            Vardas <sup className="required">*</sup>
                        </FormControlLabel>
                        <FormControlInput
                            type="fname"
                            id="fname"
                            name="fname"
                            value={this.state.fname}
                            onChange={this.handleChange}
                            placeholder="Vardas"
                            required
                            className="placeholder"
                        />
                        <FieldFeedbacks for="fname" show="all">
                            <FieldFeedback when="valueMissing">
                                Įveskite vardą
                            </FieldFeedback>
                            <FieldFeedback
                                // when={value => !/^[a-zA-Z\s]*$/.test(value)}
                                when={value => !/^[a-zA-ZĀ-ž\s]*$/.test(value)}
                                // warning
                            >
                                Vardą turėtų sudaryti tik raidės
                            </FieldFeedback>
                        </FieldFeedbacks>
                    </FormGroup>

                    <FormGroup for="lname">
                        <FormControlLabel htmlFor="lname">
                            Pavardė <sup className="required">*</sup>
                        </FormControlLabel>
                        <FormControlInput
                            type="lname"
                            id="lname"
                            name="lname"
                            value={this.state.lname}
                            onChange={this.handleChange}
                            placeholder="Pavardė"
                            required
                            className="placeholder"
                        />
                        <FieldFeedbacks for="lname" show="all">
                            <FieldFeedback when="valueMissing">
                                Įveskite pavardę
                            </FieldFeedback>
                            <FieldFeedback
                                when={value => !/^[a-zA-ZĀ-ž\s]*$/.test(value)}
                                // warning
                            >
                                Pavardę turėtų sudaryti tik raidės
                            </FieldFeedback>
                        </FieldFeedbacks>
                    </FormGroup>

                    <FormGroup for="email">
                        <FormControlLabel htmlFor="email">
                            El. paštas <sup className="required">*</sup>
                        </FormControlLabel>
                        <FormControlInput
                            type="email"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="elektroninis@paštas.lt"
                            required
                            minLength={3}
                            className="placeholder"
                        />
                        <FieldFeedbacks for="email">
                            <FieldFeedback when="valueMissing">
                                Įveskite el. pašto adresą
                            </FieldFeedback>
                            <FieldFeedback when="tooShort">
                                Per trumas el. pašto adresas
                            </FieldFeedback>
                            <FieldFeedback when="*" />
                        </FieldFeedbacks>
                    </FormGroup>

                    <FormGroup for="phone">
                        <FormControlLabel htmlFor="phone">
                            Telefonas <sup className="required">*</sup>
                        </FormControlLabel>
                        <div className="ui-inputgroup">
                            <span className="ui-inputgroup-addon">370</span>

                            <FormControlInput
                                type="phone"
                                id="phone"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                // placeholder="370xxxxxxxx"
                                required
                                className="input-group"
                                maxLength="8"
                                // pattern="^(370)\d{8}$"
                                // /^$|^(370)\d+$/
                            />
                        </div>

                        <FieldFeedbacks for="phone" show="all">
                            <FieldFeedback when="valueMissing">
                                Įveskite telefono numerį
                            </FieldFeedback>
                            <FieldFeedback
                                when={value => !/^\d{0,8}$/.test(value)}
                                // warning
                            >
                                Telefono numerį turi sudaryti tik skaičiai.
                            </FieldFeedback>
                            <FieldFeedback
                                when={value => !/^\d{8}$/.test(value)}
                                warning
                            >
                                Telefono numerį turi sudaryti 8 skaičiai.
                            </FieldFeedback>
                        </FieldFeedbacks>
                    </FormGroup>

                    <FormGroup for="password">
                        <FormControlLabel htmlFor="password">
                            Slaptažodis <sup className="required">*</sup>
                        </FormControlLabel>
                        <FormControlInput
                            type="password"
                            id="password"
                            name="password"
                            innerRef={password => (this.password = password)}
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            required
                            pattern="^.{6,254}$"
                            className="placeholder"
                        />
                        <FieldFeedbacks for="password" show="all">
                            <FieldFeedback when="valueMissing">
                                Įveskite slaptažodį
                            </FieldFeedback>
                            <FieldFeedback when="patternMismatch">
                                Slaptažodis turi būti ne trumpesnis nei 6
                                simboliai
                            </FieldFeedback>
                            <FieldFeedback
                                when={value => !/\d/.test(value)}
                                // warning
                            >
                                Slaptažodyje turi būti bent vienas skaičius
                            </FieldFeedback>
                            <FieldFeedback
                                when={value => !/[a-zA-Z]/.test(value)}
                                // warning
                            >
                                Slaptažodyje turi būti bent viena raidė
                            </FieldFeedback>
                        </FieldFeedbacks>
                    </FormGroup>

                    <FormGroup for="passwordrepeat">
                        <FormControlLabel htmlFor="passwordrepeat">
                            Slaptažodis (pakartokite)
                            <sup className="required">*</sup>
                        </FormControlLabel>
                        <FormControlInput
                            type="password"
                            id="passwordrepeat"
                            name="passwordrepeat"
                            value={this.state.passwordrepeat}
                            onChange={this.handleChange}
                            className="placeholder"
                        />
                        <FieldFeedbacks for="passwordrepeat">
                            <FieldFeedback
                                when={value => value !== this.password.value}
                            >
                                Nesutampa slaptažodžiai
                            </FieldFeedback>
                        </FieldFeedbacks>
                    </FormGroup>

                    <p className="required">
                        <sup>*</sup> Privalomas laukas
                    </p>

                    <Button
                        label="Registruoti"
                        disabled={this.state.submitButtonDisabled}
                        className="btn btn-primary"
                        // onClick={this.saveUser}
                        // onClick={this.showSuccess}
                    />
                    <Messages
                        ref={el => {
                            this.messages = el;
                        }}
                    />
                </FormWithConstraints>
            </div>
        );
    }
}
export default UserRegForm;
