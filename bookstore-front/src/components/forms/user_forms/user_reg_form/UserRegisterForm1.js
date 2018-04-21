import React, { Component } from "react";
import axios from "axios";
import { USERS } from "../../../../server_links/ServerLinks";
import { Button } from "primereact/components/button/Button";
import { Messages } from "primereact/components/messages/Messages";
//kitu moduliu komponentai
// import PasswordMask from "react-password-mask";

class UserRegForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            // passwordrepeat: "",
            email: "",
            phone: "",
            password: "",
            role: 1
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.showSuccess = this.showSuccess.bind(this);
        this.showUnsuccess = this.showUnsuccess.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    // handleSubmit(event) {
    //     alert(this.state.lname + " užregistruotas Knygų parduotuvėje.");
    //     event.preventDefault();
    // }

    showSuccess() {
        this.messages.show({
            severity: "success",
            summary: "Administratorius užregistruotas!"
        });
    }

    showUnsuccess() {
        this.messages.show({
            severity: "error",
            summary: "Klaida registruojant administratorių!"
        });
    }

    saveUser(e) {
        e.preventDefault();
        // if (this.state.password !== this.state.passwordrepeat) {
        //     return;
        // }
        axios
            .post(USERS, {
                fName: this.state.fname,
                lName: this.state.lname,
                email: this.state.email,
                phone: this.state.phone,
                password: this.state.password,
                role: this.state.role
            })
            .then(response => {
                // response.status === 200
                //     ? this.showSuccess()
                //     : this.showUnsuccess();
                if (response.status === 200) {
                    this.showSuccess();
                } else {
                    this.showUnsuccess();
                }
                console.log(response.data);
                console.log(response.status);
                console.log("User successfully added");
                this.setState({
                    fName: "",
                    lName: "",
                    email: "",
                    phone: "",
                    password: "",
                    role: "1"
                });
            })
            .catch(function(error) {
                // this.showUnsuccess();
                console.log("Klaida įvedant vartotoją" + error);
            });
    }

    render() {
        return (
            <div className="reg_form">
                {/* <form onSubmit={this.handleSubmit}> */}
                <form>
                    <h3>Registruoti administratorių</h3>
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
                        El. paštas
                        <input
                            id="emailas"
                            name="email"
                            placeholder="Įveskite el paštą"
                            className="placeholder"
                            type="email"
                            pattern="^.{3,254}$"
                            required
                            // onInvalid="setCustomValidity('Plz enter on Alphabets ')"
                            value={this.state.email}
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
                            required
                            value={this.state.phone}
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
                            // Neveikia passwordo validacija Fronte, kai naudojamas tagas <PasswordMask>
                            pattern="^.{6,254}$"
                            value={this.state.password}
                            onChange={this.handleChange}
                            // buttonClassName="showhidebutt"
                            // showButtonContent="Rodyti"
                            // hideButtonContent="Slėpti"
                        />
                    </label>
                    <br />
                    <Button label="Registruoti" onClick={this.saveUser} />
                    <Messages
                        ref={el => {
                            this.messages = el;
                        }}
                    />
                </form>
            </div>
        );
    }
}
export default UserRegForm;
