<<<<<<< HEAD:bookstore-front/src/components/user_reg_form/customerRegForm.js
import React, { Component } from "react";
import { InputText } from "../../../node_modules/primereact/components/inputtext/InputText";
import "../../../node_modules/primereact/resources/primereact.min.css";
import { Button } from "../../../node_modules/primereact/components/button/Button";
import "../../../node_modules/primereact/components/message/Message";
import "../../../node_modules/primereact/components/messages/Messages";
//import { Link } from "react-router-dom";
=======
import React, { Component } from 'react';
//primeract
import 'primereact/resources/primereact.min.css';
//custom
import './CustomerRegForm.css'

>>>>>>> c2c8c972da0bbcbb46891429a121a5567bc0bff3:bookstore-front/src/components/forms/user_forms/user_reg_form/CustomerRegForm.js

export class CustomerRegForm extends Component {
  constructor() {
    super();

    this.showInfo = this.showInfo.bind(this);

    this.state = {
      vardas: "",
      pavrde: "",
      ePastas: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showInfo() {
    this.messages.show({
      severity: "info",
      summary: "Info Message",
      detail: "PrimeReact rocks"
    });
  }

  clear() {
    this.messages.clear();
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
            <label htmlFor="float-input"> elektroninis @adresas.lt </label>{" "}
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
          <Button
            label="Save"
            className="ui-button-danger"
            onClick={this.handleSubmit}
          />

          
          <div className="ui-g ui-fluid">
            <div className="ui-g-12 ui-md-3">
              <Button
                onClick={this.showInfo}
                label="Info"
                className="ui-button-info"
              />
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default CustomerRegForm;
