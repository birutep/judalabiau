import React, { Component } from "react";
import axios from "axios";
import { USERS } from "../../../../server_links/ServerLinks";
import { Button } from "primereact/components/button/Button";
//kitu moduliu komponentai
// import PasswordMask from "react-password-mask";

class UserRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fname: "",
            lname: "",
            password: "",
            passwordrepeat: "",
            address: "",
            birthday: "",
            role: 3,
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
                role: 3,
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
            <div className="reg_form">
                <form onSubmit={this.handleSubmit}>
                    <h3>Registruoti vartotoją</h3>
                    <label>
                        El. paštas
                        <input
                            name="email"
                            placeholder="Įveskite el paštą"
                            className="placeholder"
                            required
                            type="email"
                            pattern="^.{3,254}$"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Slaptažodis
                        {/* <PasswordMask */}
                        <input
                            name="password"
                            placeholder="Įveskite slaptažodį"
                            className="placeholder"
                            required
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            // buttonClassName="showhidebutt"
                            // showButtonContent="Rodyti"
                            // hideButtonContent="Slėpti"
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
                            pattern="^[a-zA-Z]+$"
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
                            pattern="^[a-zA-Z]+$"
                            value={this.state.lName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Gimimo data
                        <input
                            name="birthday"
                            placeholder="Įveskite gimimo datą"
                            required
                            type="date"
                            value={this.state.birthday}
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
                            pattern="^(8|370|\+370)\d{8}$"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Adresas
                        <input
                            name="address"
                            placeholder="Įveskite adresą"
                            type="text"
                            value={this.state.address}
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
