import React, { Component } from "react";
import axios from "axios/index";
import { Button } from "primereact/components/button/Button";


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginTo = this.loginTo.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    loginTo(e) {
        e.preventDefault();
        
        let userData = new FormData();
        userData.set('username', this.state.username);
        userData.set('password', this.state.pass);

        const proxyurl = "https://cors-anywhere.herokuapp.com/";

        axios.post(proxyurl+'http://localhost:8080/login', userData,
        {headers:{'Content-type':'application/x-www-form-urlencoded'}})
            .then((response) => {
                if (response.status === 200){
                    alert('Prisijungimas pavyko');
                }
                else if (response.status === 401){
                    alert('401 klaida');
                }
            })
            // .catch((e) => {console.log(e);
            //     alert('Kazkas nepavyko');
            .catch(function  (e) {
                alert('Nepavyko prisijungti');         
            });
    }

    render() {
        return (
            <div className="book_reg_form login_area">
                <form onSubmit={this.handleSubmit}>
                    <h3>Prisijungti prie sistemos</h3>
                    <label>
                        Elektroninis paštas:
                        <input
                            name="username"
                            placeholder="Įveskite el. paštą, kuriuo užsiregistravote"
                            className="placeholder"
                            required
                            type="email"
                            value={this.state.username}
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
