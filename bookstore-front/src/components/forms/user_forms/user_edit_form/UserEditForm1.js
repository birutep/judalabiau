import React, { Component, Fragment } from "react";
import axios from "axios/index";
import Subheader from "../../../layout/sub_header/SubHeader";
import { inject, observer } from "mobx-react";
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

@inject("userStore")
@observer
class UserEditForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyUser: {
                id: "",
                fName: "",
                lName: "",
                email: "",
                phone: "",
                role: 1
            },
            id: this.props.userStore.userToEdit.id,
            fName: this.props.userStore.userToEdit.fName,
            lName: this.props.userStore.userToEdit.lName,
            email: this.props.userStore.userToEdit.email,
            phone: this.props.userStore.userToEdit.phone
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.showError = this.showError.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({
            id: this.props.userStore.userToEdit.id,
            fName: this.props.userStore.userToEdit.fName,
            lName: this.props.userStore.userToEdit.lName,
            email: this.props.userStore.userToEdit.email,
            phone: this.props.userStore.userToEdit.phone
        });
    }

    handleChange(e) {
        const target = e.currentTarget;
        this.form.validateFields(target);
        this.setState({
            [e.target.name]: e.target.value,
            submitButtonDisabled: !this.form.isValid()
        });
    }

    showSuccess() {
        this.messages.show({
            severity: "success",
            summary: "Informacija atnaujinta!"
        });
    }

    showError() {
        this.messages.show({
            severity: "error",
            summary: "Klaida atnaujinant duomenis!"
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    updateUser() {
        this.form.validateFields();
        this.setState({ submitButtonDisabled: !this.form.isValid() });
        if (this.form.isValid()) {
            let self = this;
            axios
                .put(USERS + this.state.id, {
                    id: this.state.id,
                    fName: this.state.fName,
                    lName: this.state.lName,
                    email: this.state.email,
                    phone: this.state.phone,
                    role: 1
                })
                .then(response => {
                    if (response.status === 200) {
                        this.showSuccess();
                    }
                    this.props.userStore.changeState();
                    this.props.userStore.editUser(this.state.emptyUser);
                })
                .catch(function(error) {
                    self.showError();
                });
        }
    }

    render() {
        return (
            <Fragment>
                <Subheader
                    label={
                        "Administratoriaus, kurio id " +
                        this.state.id +
                        " redagavimas"
                    }
                />
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
                        <Button
                            label="Pakeisti"
                            disabled={this.state.submitButtonDisabled}
                            onClick={this.updateUser}
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

export default UserEditForm1;
