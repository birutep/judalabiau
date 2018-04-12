import React, { Component } from "react";
import axios from "axios/index";
import { Button } from "primereact/components/button/Button";
//kaip cia gaunasi su tuo response above (jis pas man prie axios)


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginTo = this.loginTo.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert('"' + this.state.email + '" bando prisijungti prie sistemos.');
        event.preventDefault();
    }

    loginTo(e) {
        e.preventDefault();
        
        let userData = new URLSearchParams();
        userData.append('username', this.state.email);
        userData.append('password', this.state.pass);

        axios.post('http://localhost:8080/login', userData,
        {headers:{'Content-type':'application/x-www-form-urlencoded'}})
            .then((response) => {
                alert('Prisijungimas pavyko.')
            })
            .catch((e) => {console.log(e);
            });
    }

    render() {
        return (
            <div className="book_reg_form">
                <form onSubmit={this.handleSubmit}>
                    <h3>Prisijungti prie sistemos</h3>
                    <label>
                        Elektroninis paštas:
                        <input
                            name="email"
                            placeholder="Įveskite el. paštą, kuriuo užsiregistravote"
                            className="placeholder"
                            required
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Slaptažodis:
                        <input
                            name="password"
                            placeholder="Įveskite slaptažodį"
                            className="placeholder"
                            required
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <Button label="Prisijungti" onClick={this.loginTo} />
                </form>
            </div>
        );
    }
}

export default LoginForm;
