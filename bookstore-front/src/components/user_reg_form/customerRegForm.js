import React, { Component } from 'react';
import { InputText } from "../../../node_modules/primereact/components/inputtext/InputText";
import 'primereact/resources/primereact.min.css';
import { Button } from "../../../node_modules/primereact/components/button/Button";

export class CustomerRegForm extends Component {
    constructor(){
        super();
        this.state = {
            vardas: "",
            pavrde: "",
            ePastas: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.value);
    }

    render() {
        return(
        <div>
            <div className="content-section">
                <div className="feature-info">
                    <h1>Pirkėjo registracijos forma</h1>
                </div>
            </div>
        </div>
        )
    }
}

export default CustomerRegForm;