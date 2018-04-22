import React, { Component } from "react";
import { Button } from "primereact/components/button/Button";
import axios from "axios/index";
import { USERS } from "../../../../server_links/ServerLinks";

class UserEditFrom1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyUser: {
                id: "",
                fName: "",
                lName: "",
                dateOfBirth: "",
                phone: ""
            },
            id: this.props.id,
            fName: this.props.fName,
            lName: this.props.lName,
            dateOfBirth: this.props.dateOfBirth,
            phone: this.props.phone
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
            dateOfBirth: this.props.dateOfBirth,
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
        alert(
        "siunciam updeitui " +
            this.state.fName );
        
         alert("adresu http://localhost:8080/users/" + this.state.id);
        axios
            .put(USERS + this.state.id, {
                id: this.state.id,
                fName: this.props.fName,
                lName: this.props.fName,
                dateOfBirth: this.props.dateOfBirth,
                phone: this.props.phone
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
                        Vartotojo, kurio registracijos numeris {this.state.id}
                        redagavimas
                    </h3>
                    <label>
                        Vartotojo vardas:
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
                        Vartotojo pavardė:
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
                        Vartotojo gimimo data:
                        <input
                            name="dateOfBirth"
                            placeholder="Įveskite gimimo datą"
                            className="placeholder"
                            required
                            type="text"
                            value={this.state.dateOfBirth}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Vartotojo telefono numeris:
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
                    <Button label="Pakeisti" onClick={this.updateUser} />
                </form>
            </div>
        );
    }
}

export default UserEditFrom1;
