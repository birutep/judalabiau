import React, { Component } from "react";
import { InputText } from "primereact/components/inputtext/InputText";
import { Button } from "primereact/components/button/Button";




export class UserRegForm extends Component {
    constructor() {
        super();

        this.state = {
            vardas: "",
            pavrde: "",
            ePastas: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.value);
    }

    handleSubmit(event) {
        alert('"' + this.state.title + '" užregistruotas administratorius.');
        event.preventDefault();
    }

    render() {
        return (
            <div
                style={{
                    margin: "20px",
                    width: "auto",
                    float: "left"
                }}
            >
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Administratoriaus registracijos forma </h1>
                    </div>
                </div>{" "}
                <div className="content-section implementation">
                    <h3> Vardas </h3>
                    <span className="ui-float-label">
                        <InputText
                            name="vardas"
                            id="float-input"
                            type="text"
                            size="30"
                            onChange={this.handleChange}
                        />
                        <label htmlFor="float-input"> Vardas </label>
                    </span>
                    <h3> Pavardė </h3>
                    <span className="ui-float-label">
                        <InputText
                            name="pavarde"
                            id="float-input"
                            type="text"
                            size="30"
                            onChange={this.handleChange}
                        />{" "}
                        <label htmlFor="float-input"> Pavardė </label>{" "}
                    </span>
                    <h3> Elektroninio pašto adresas </h3>{" "}
                    <span className="ui-float-label">
                        <InputText
                            id="float-input"
                            name="ePastas"
                            type="text"
                            size="30"
                            onChange={this.handleChange}
                        />{" "}
                        <label htmlFor="float-input">
                            {" "}
                            elektroninis @adresas.lt{" "}
                        </label>{" "}
                    </span>
                    <h3> Telefono numeris </h3>{" "}
                    <span className="ui-float-label">
                        <InputText
                            name="telNumeris"
                            id="float-input"
                            type="text"
                            size="30"
                            onChange={this.handleChange}
                        />{" "}
                        <label htmlFor="float-input"> telefono numeris </label>{" "}
                    </span>{" "}
                    <h3>Slaptažodis</h3>{" "}
                    <span className="ui-float-label">
                        <InputText
                            name="telNumeris"
                            id="float-input"
                            type="text"
                            size="30"
                            onChange={this.handleChange}
                        />{" "}
                        <label htmlFor="float-input">Slaptažodis</label>{" "}
                    </span>{" "}
                    <h3>Pakartokite slaptažodį</h3>{" "}
                    <span className="ui-float-label">
                        <InputText
                            name="telNumeris"
                            id="float-input"
                            type="text"
                            size="30"
                            onChange={this.handleChange}
                        />{" "}
                        <label htmlFor="float-input">
                            Pakartokite slaptažodį
                        </label>{" "}
                    </span>{" "}
                    <Button
                        label="Save"
                        className="ui-button-danger"
                        onClick={this.handleSubmit}
                    />
                </div>{" "}
            </div>
        );
    }
}

export default UserRegForm;
