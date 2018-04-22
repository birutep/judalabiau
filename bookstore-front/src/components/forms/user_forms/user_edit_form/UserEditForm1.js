import React, { Component } from "react";
import axios from "axios/index";
import {inject, observer} from "mobx-react";
import { USERS } from "../../../../server_links/ServerLinks";
import { Button } from "primereact/components/button/Button";

@inject("userStore")
@observer
class UserEditFrom1 extends Component {
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
            id: this.props.userStore.userToEdit.id,
            fName: this.props.userStore.userToEdit.fName,
            lName: this.props.userStore.userToEdit.lName,
            dateOfBirth: this.props.userStore.userToEdit.email,
            phone: this.props.userStore.userToEdit.phone
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentWillReceiveProps() {
        this.setState({
            id: this.props.userStore.userToEdit.id,
            fName: this.props.userStore.userToEdit.fName,
            lName: this.props.userStore.userToEdit.fName,
            dateOfBirth: this.props.userStore.userToEdit.email,
            phone: this.props.userStore.userToEdit.phone
        });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        console.log('"' + this.state.vardas + '" pakeista informacija.');
        event.preventDefault();
    }

    updateUser() {
        console.log(
        "siunciam updeitui " +
            this.state.fName );
        
         console.log("adresu http://localhost:8080/users/" + this.state.id);
        axios
            .put(USERS + this.state.id, {
                id: this.state.id,
                fName: this.props.fName,
                lName: this.props.fName,
                dateOfBirth: this.props.email,
                phone: this.props.phone,
                role:1
            })
            .then(() => {
                this.props.userStore.changeState();
                this.props.userStore.editUser(this.state.emptyUser);
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
                        Vartotojo elektronionio pašto adresas:
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
