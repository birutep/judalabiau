import React, { Component } from "react";
import axios from "axios";
import { USERS } from "../../../../server_links/ServerLinks";
import { Button } from "primereact/components/button/Button";
//kitu moduliu komponentai
// import PasswordMask from "react-password-mask";
// import { FormWithConstraints } from "../../../../../node_modules/react-form-with-constraints/";
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
    }

    // handleChange(event) {
    //     this.setState({ [event.target.name]: event.target.value });
    // }

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

    // handleSubmit(e) {
    //     e.preventDefault();
    //     this.form.validateFields();
    //     this.setState({ submitButtonDisabled: !this.form.isValid() });
    //     if (this.form.isValid()) {
    //       alert(`Valid form\n\nthis.state =\n${JSON.stringify(this.state, null, 2)}`);
    //     }
    //   }

    handleSubmit(e) {
        // if (this.state.password !== this.state.passwordrepeat) {
        //     return;
        // }  e.preventDefault();
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
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }

    render() {
        return (
            <div className="reg_form">
                <FormWithConstraints
                    ref={formWithConstraints =>
                        (this.form = formWithConstraints)
                    }
                    onSubmit={this.handleSubmit}
                    // noValidate
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
                                when={value => !/^[a-zA-Z]+$/.test(value)}
                                warning
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
                                when={value => !/^[a-zA-Z]+$/.test(value)}
                                warning
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
                        <FormControlInput
                            type="phone"
                            id="phone"
                            name="phone"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            placeholder="370xxxxxxxx"
                            required
                            className="placeholder"
                            size="11"
                            // pattern="^(370)\d{8}$"
                            // /^$|^(370)\d+$/
                        />
                        <FieldFeedbacks for="phone" show="all">
                            <FieldFeedback when="valueMissing">
                                Įveskite telefono numerį
                            </FieldFeedback>
                            <FieldFeedback
                                when={value => !/^$|^(370)\d{8}$/.test(value)}
                            >
                                Neteisingas telefono numerio formatas. Telefono
                                numerį turi sudaryti 370 ir 8 skaičiai, pvz.:
                                370xxxxxxxx
                            </FieldFeedback>
                            {/* <FieldFeedback
                                when={value => !/\d/.test(value)}
                                warning
                            >
                                Telefono numerį turėtų sudaryti tik skaičiai
                            </FieldFeedback> */}
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
                                Įveskite telefono numerį
                            </FieldFeedback>
                            <FieldFeedback when="patternMismatch">
                                Slaptažodis turėtų būti ne trumpesnis nei 6
                                simboliai
                            </FieldFeedback>
                            <FieldFeedback
                                when={value => !/\d/.test(value)}
                                warning
                            >
                                Slaptažodyje turi būti bent vienas skaičius
                            </FieldFeedback>
                            <FieldFeedback
                                when={value => !/[a-zA-Z]/.test(value)}
                                warning
                            >
                                Slaptažodis turėtų turėti bent vieną raidę
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
                    />
                </FormWithConstraints>
            </div>
            // <div className="reg_form">
            //     <form onSubmit={this.handleSubmit}>
            //         <h3>Registruoti pardavėją</h3>
            //         <label>
            //             El. paštas
            //             <input
            //                 // className={errors.email ? "error" : ""}
            //                 name="email"
            //                 placeholder="Įveskite el paštą"
            //                 className="placeholder"
            //                 required
            //                 type="email"
            //                 pattern="^.{3,254}$"
            //                 value={this.state.email}
            //                 onChange={this.handleChange}
            //             />
            //         </label>
            //         <br />
            //         <label>
            //             Slaptažodis
            //             {/* <PasswordMask */}
            //             <input
            //                 name="password"
            //                 placeholder="Įveskite slaptažodį"
            //                 className="placeholder"
            //                 required
            //                 type="password"
            //                 // Neveikia jokia passwordo validacija Fronte, kai naudojamas tagas <PasswordMask>
            //                 pattern="^.{6,254}$"
            //                 value={this.state.password}
            //                 onChange={this.handleChange}
            //                 // buttonClassName="showhidebutt"
            //                 // showButtonContent="Rodyti"
            //                 // hideButtonContent="Slėpti"
            //             />
            //         </label>
            //         <br />
            //         <label>
            //             Vardas
            //             <input
            //                 name="fname"
            //                 placeholder="Įveskite vardą"
            //                 className="placeholder"
            //                 required
            //                 type="text"
            //                 pattern="^[a-zA-Z]+$"
            //                 value={this.state.fName}
            //                 onChange={this.handleChange}
            //             />
            //         </label>
            //         <br />
            //         <label>
            //             Pavardė
            //             <input
            //                 name="lname"
            //                 placeholder="Įveskite pavardę"
            //                 className="placeholder"
            //                 required
            //                 type="text"
            //                 pattern="^[a-zA-Z]+$"
            //                 value={this.state.lName}
            //                 onChange={this.handleChange}
            //             />
            //         </label>
            //         <br />
            //         <label>
            //             Telefono numeris
            //             <input
            //                 name="phone"
            //                 placeholder="Įveskite telefono numerį"
            //                 type="text"
            //                 required
            //                 pattern="^(8|370|\+370)\d{8}$"
            //                 value={this.state.phone}
            //                 onChange={this.handleChange}
            //             />
            //         </label>
            //         <br />
            //         <Button label="Registruoti" />
            //     </form>
            // </div>
        );
    }
}
export default UserRegForm;
