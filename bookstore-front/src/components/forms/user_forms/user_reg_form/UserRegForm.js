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
        alert('"' + this.state.title + '" užregistruotas vartotojas.');
        event.preventDefault();
    }

    render() {
        return (
            <div className="customer_reg_form">
                <form>
                    <h3>Vartotojo registracijacija </h3>
                    <label>
                        Vardas
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
                    </label>
                    <label>
                        {" "}
                        Pavardė
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
                    </label>
                    <label>
                        {" "}
                        Elektroninio pašto adresas
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
                                elektroninio.pašto@adresas.lt{" "}
                            </label>{" "}
                        </span>
                    </label>
                    <label>
                        {" "}
                        Telefono numeris
                        <span className="ui-float-label">
                            <InputText
                                name="telNumeris"
                                id="float-input"
                                type="text"
                                size="30"
                                onChange={this.handleChange}
                            />{" "}
                            <label htmlFor="float-input">
                                {" "}
                                telefono numeris{" "}
                            </label>{" "}
                        </span>
                    </label>
                    <label>
                        Slaptažodis
                        <span className="ui-float-label">
                            <InputText
                                name="telNumeris"
                                id="float-input"
                                type="text"
                                size="30"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="float-input">Slaptažodis</label>{" "}
                        </span>
                    </label>
                    <label>
                        Pakartokite slaptažodį
                        <span className="ui-float-label">
                            <InputText
                                name="telNumeris"
                                id="float-input"
                                type="text"
                                size="30"
                                onChange={this.handleChange}
                            />
                            <label htmlFor="float-input">
                                Pakartokite slaptažodį
                            </label>
                        </span>
                    </label>
                    <Button label="Patvirtinti" onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }
}

export default UserRegForm;
