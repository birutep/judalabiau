import React, { Component } from "react";
import { Button } from "primereact/components/button/Button";
import axios from "axios/index";
import { BOOKS } from "../../../../server_links/ServerLinks";

class UserEditFrom3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyUser: {
                id: "",
                fName: "",
                lName: "",
                email: "",
                phone: ""
            },
            id: "",
            fName: "",
            lName: "",
            email: "",
            phone: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({
            id: this.props.user.id,
            fName: this.props.fName,
            lName: this.props.fName,
            email: this.props.email,
            phone: this.props.phone
        });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert('"' + this.state.vardas + '" pakeista informacija.');
        event.preventDefault();
    }

    updateUser() {
        console
            .log
            // "siunciam updeitui " +
            //     this.state.price +
            //     " tipas " +
            //     typeof this.state.price
            ();
        // console.log("adresu http://localhost:8080/users/" + this.state.id);
        axios
            .put(BOOKS + this.state.id, {
                id: this.state.id
            })
            .then(() => {
                this.props.bookStore.changeState();
                this.props.bookStore.editBook(this.state.emptyUser);
            })
            .catch(function(error) {
                console.log("Klaida redaguojant vartotoją" + error);
            });
    }
    render() {
        return (
            <div className="reg_form">
                <form onSubmit={this.handleSubmit}>
                    <h3>
                        Administratoriaus, kurio registracijos numeris {this.state.id}{" "}
                        redagavimas
                    </h3>
                    <label>
                    Administratoriaus vardas:
                        <input
                            name="fName"
                            placeholder="Įveskite vardą"
                            className="placeholder"
                            required
                            type="text"
                            value={this.state.fName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                    Administratoriaus pavardė:
                        <input
                            name="lName"
                            placeholder="Įveskite pavrdę"
                            className="placeholder"
                            required
                            type="text"
                            value={this.state.lName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                    Administratoriaus elektronionio pašto adresas:
                        <input
                            name="email"
                            placeholder="Įveskite elektronionio pašto adresą"
                            className="placeholder"
                            required
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                    Administratoriaus telefono numeris:
                        <input
                            name="phone"
                            placeholder="Įveskite telefono numerį"
                            className="placeholder"
                            required
                            type="text"
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <Button label="Redaguoti" onClick={this.updateUser} />
                </form>
            </div>
        );
    }
}

export default UserEditFrom3;
