import React, {Component, Fragment} from "react";
import axios from "axios";
import Subheader from "../../../layout/sub_header/SubHeader";
import {USERS} from "../../../../server_links/ServerLinks";
import {Button} from "primereact/components/button/Button";
import {Messages} from "primereact/components/messages/Messages";
import {FieldFeedback, FormWithConstraints} from "react-form-with-constraints";
import {FieldFeedbacks, FormControlInput, FormControlLabel, FormGroup} from "react-form-with-constraints-bootstrap4";

class UserRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fName: "",
            lName: "",
            email: "",
            phone: "",
            password: "",
            passwordrepeat: "",
            role: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.showError = this.showError.bind(this);
    }

    handleChange(e) {
        const target = e.currentTarget;
        this.form.validateFields(target);
        this.setState({
            [e.target.name]: e.target.value,
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
            summary: "Administratorius užregistruotas!"
        });
    }

    showError() {
        this.messages.show({
            severity: "error",
            summary: "Klaida registruojant administratorių!"
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    saveUser() {
        if (this.state.password !== this.state.passwordrepeat) {
            return;
        }
        this.form.validateFields();
        this.setState({ submitButtonDisabled: !this.form.isValid() });
        if (this.form.isValid()) {
            let self = this;
            axios
                .post(USERS, {
                    email: this.state.email,
                    fName: this.state.fName,
                    lName: this.state.lName,
                    password: this.state.password,
                    address: this.state.address,
                    birthday: this.state.birthday,
                    role: this.state.role,
                    phone: 370 + this.state.phone
                })
                .then(response => {
                    if (response.status === 200) {
                        this.showSuccess();
                    }
                    this.setState({
                        fName: "",
                        lName: "",
                        email: "",
                        phone: "",
                        password: "",
                        passwordrepeat: "",
                        role: 3
                    });
                })
                .catch(function(error) {
                    self.showError();
                });
        }
    }

    render() {
        return (
            <Fragment>
                <Subheader label={"Registruoti administratorių"} />
                <div className="reg_form">
                    <FormWithConstraints
                        ref={formWithConstraints =>
                            (this.form = formWithConstraints)
                        }
                        onSubmit={this.handleSubmit}
                    >
                        <FormGroup for="fName">
                            <FormControlLabel htmlFor="fName">
                                Vardas <sup className="required">*</sup>
                            </FormControlLabel>
                            <FormControlInput
                                type="text"
                                id="fName"
                                name="fName"
                                value={this.state.fName}
                                onChange={this.handleChange}
                                placeholder="Vardas"
                                required
                                className="placeholder"
                            />
                            <FieldFeedbacks for="fName" show="all">
                                <FieldFeedback when="valueMissing">
                                    Įveskite vardą
                                </FieldFeedback>
                                <FieldFeedback
                                    when={value =>
                                        !/^[a-zA-ZĀ-ž\s]*$/.test(value)
                                    }
                                >
                                    Vardą turėtų sudaryti tik raidės
                                </FieldFeedback>
                            </FieldFeedbacks>
                        </FormGroup>
                        <FormGroup for="lName">
                            <FormControlLabel htmlFor="lName">
                                Pavardė <sup className="required">*</sup>
                            </FormControlLabel>
                            <FormControlInput
                                type="text"
                                id="lName"
                                name="lName"
                                value={this.state.lName}
                                onChange={this.handleChange}
                                placeholder="Pavardė"
                                required
                                className="placeholder"
                            />
                            <FieldFeedbacks for="lName" show="all">
                                <FieldFeedback when="valueMissing">
                                    Įveskite pavardę
                                </FieldFeedback>
                                <FieldFeedback
                                    when={value =>
                                        !/^[a-zA-ZĀ-ž\s]*$/.test(value)
                                    }
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
                                Telefono numeris{" "}
                                <sup className="required">*</sup>
                            </FormControlLabel>
                            <div className="ui-inputgroup">
                                <span className="ui-inputgroup-addon">370</span>

                                <FormControlInput
                                    type="phone"
                                    id="phone"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    required
                                    className="input-group"
                                    maxLength="8"
                                />
                            </div>
                            <FieldFeedbacks for="phone" show="all">
                                <FieldFeedback when="valueMissing">
                                    Įveskite telefono numerį
                                </FieldFeedback>
                                <FieldFeedback
                                    when={value => !/^\d{0,8}$/.test(value)}
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
                                innerRef={password =>
                                    (this.password = password)
                                }
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
                                >
                                    Slaptažodyje turi būti bent vienas skaičius
                                </FieldFeedback>
                                <FieldFeedback
                                    when={value => !/[a-zA-Z]/.test(value)}
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
                                    when={value =>
                                        value !== this.password.value
                                    }
                                >
                                    Nesutampa slaptažodžiai
                                </FieldFeedback>
                            </FieldFeedbacks>
                        </FormGroup>
                        <Button
                            label="Registruoti"
                            disabled={this.state.submitButtonDisabled}
                            onClick={this.saveUser}
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
export default UserRegForm;
