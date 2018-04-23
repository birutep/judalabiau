import React, {Component, Fragment} from "react";
import axios from "axios/index";
import Subheader from "../../../layout/sub_header/SubHeader";
import {inject, observer} from "mobx-react";
import {USERS} from "../../../../server_links/ServerLinks";
import {Button} from "primereact/components/button/Button";
import {Messages} from "primereact/components/messages/Messages";
import {FieldFeedback, FormWithConstraints} from "react-form-with-constraints";
import {FieldFeedbacks, FormControlInput, FormControlLabel, FormGroup} from "react-form-with-constraints-bootstrap4";

@inject("userStore")
@observer
class UserEditForm3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyUser: {
                id: "",
                fName: "",
                lName: "",
                email: "",
                birthday: "",
                phone: "",
                address: "",
                role: 3
            },
            id: this.props.userStore.userToEdit.id,
            fName: this.props.userStore.userToEdit.fName,
            lName: this.props.userStore.userToEdit.lName,
            email: this.props.userStore.userToEdit.email,
            birthday: this.props.userStore.userToEdit.birthday,
            phone: this.props.userStore.userToEdit.phone,
            address: this.props.userStore.userToEdit.address
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
            birthday: this.props.userStore.userToEdit.birthday,
            phone: this.props.userStore.userToEdit.phone,
            address: this.props.userStore.userToEdit.address
        });
    }

    handleChange(event) {
        const target = event.currentTarget;
        this.form.validateFields(target);
        this.setState({
            [event.target.name]: event.target.value,
            submitButtonDisabled: !this.form.isValid()
        });
    }

    handleSubmit(event) {
        event.preventDefault();
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
                    birthday: this.state.birthday,
                    phone: this.state.phone,
                    address: this.state.address,
                    role: 3
                })
                .then(response => {
                    this.props.userStore.changeState();
                    if (response.status === 200) {
                        this.showSuccess();
                    }
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
                        "Vartotojo, kurio id " + this.state.id + " redagavimas"
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

                        <FormGroup for="birthday">
                            <FormControlLabel htmlFor="birthday">
                                Gimimo data <sup className="required">*</sup>
                            </FormControlLabel>
                            <FormControlInput
                                type="date"
                                id="birthday"
                                name="birthday"
                                value={this.state.birthday}
                                onChange={this.handleChange}
                                required
                            />
                            <FieldFeedbacks for="birthday" show="all">
                                <FieldFeedback when="valueMissing">
                                    Įveskite gimimo datą
                                </FieldFeedback>
                            </FieldFeedbacks>
                        </FormGroup>

                        <FormGroup for="phone">
                            <FormControlLabel htmlFor="phone">
                                Telefono numeris
                            </FormControlLabel>
                            <FormControlInput
                                type="text"
                                id="phone"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                                className="input-group"
                                maxLength="11"
                            />
                            <FieldFeedbacks for="phone" show="all">
                                <FieldFeedback when="valueMissing">
                                    Įveskite telefono numerį
                                </FieldFeedback>
                                <FieldFeedback
                                    when={value => !/^\d{0,11}$/.test(value)}
                                >
                                    Telefono numerį turi sudaryti tik skaičiai.
                                </FieldFeedback>
                                <FieldFeedback
                                    when={value => !/^\d{11}$/.test(value)}
                                    warning
                                >
                                    Telefono numerį turi sudaryti 11 skaičių.
                                </FieldFeedback>
                            </FieldFeedbacks>
                        </FormGroup>

                        <FormGroup for="address">
                            <FormControlLabel htmlFor="address">
                                Adresas
                            </FormControlLabel>
                            <FormControlInput
                                type="text"
                                id="address"
                                name="address"
                                value={this.state.address}
                                onChange={this.handleChange}
                                placeholder="Įveskite adresą"
                                className="placeholder"
                            />
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

export default UserEditForm3;
