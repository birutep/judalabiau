import React, { Component, Fragment } from "react";

class Griauciai extends Component {
    render() {
        return (
            <Fragment>
                <h2>
                    {(this.props.rol === 1) ? "Administratoriaus": ((this.props.rol === 2) ? "Pardavėjo" : "Vartotojo")} registracija
                </h2>
                <p>Bendras laukas</p>
                <p>Bendras laukas</p>
                <p>Bendras laukas</p>
                <p>Bendras laukas</p>
                {hook(this.props.rol)}
            </Fragment>
        );
    }
}

const hook = () => {
    <p>oho</p>;
};

export default Griauciai;
