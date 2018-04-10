import React, { Component } from "react";
import axios from "axios";
import { USERS } from "../../../../server_links/ServerLinks";
import { Button } from "primereact/components/button/Button";
//kitu moduliu komponentai
import PasswordMask from "react-password-mask";

class UserRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fname: "",
            lname: "",
            password: "",
            passwordrepeat: "",
            role: 1,
            phone: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        // if (this.state.password !== this.state.passwordrepeat) {
        //     return;
        // }
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
    render() {
        return (
            <div className="book_reg_form">
                <form onSubmit={this.handleSubmit}>
                    <h3>Registruoti administratorių</h3>
                    <label>
                        El paštas
                        <input
                            name="email"
                            placeholder="Įveskite el paštą"
                            className="placeholder"
                            required
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Slaptažodis
                        <PasswordMask
                            name="password"
                            placeholder="Įveskite slaptažodį"
                            className="placeholder"
                            required
                            type="text"
                            value={this.state.password}
                            onChange={this.handleChange}
                            buttonClassName="showhidebutt"
                            showButtonContent="Rodyti"
                            hideButtonContent="Slėpti"
                        />
                    </label>
                    <br />
                    <label>
                        Vardas
                        <input
                            name="fname"
                            placeholder="Įveskite vardą"
                            className="placeholder"
                            required
                            type="text"
                            value={this.state.fName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Pavardė
                        <input
                            name="lname"
                            placeholder="Įveskite pavardę"
                            className="placeholder"
                            required
                            type="text"
                            value={this.state.lName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Telefono numeris
                        <input
                            name="phone"
                            placeholder="Įveskite telefono numerį"
                            type="text"
                            required
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <Button label="Registruoti" />
                </form>
            </div>
        );
    }
}
export default UserRegForm;
