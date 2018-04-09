import React, { Fragment, Component } from "react";



const Griauciai = props => {
    return (
        <div>
            {topHook(props.rol)}
            <p>Bendras laukas</p>
            <p>Bendras laukas</p>
            <p>Bendras laukas</p>
            <p>Bendras laukas</p>
            {botomHook(props.rol)}
        </div>
    );
};
const topHook = role => {
    switch (role) {
        case 1:
            return <h2>Administratoriaus registracija</h2>;
        case 2:
            return <h2>Pardavejo registracija</h2>;
        case 3:
            return <h2>Vartotojo registracija</h2>;
        default:
            break;
    }
};
const botomHook = role => {
    switch (role) {
        case 1:
            return (
                <Fragment>
                    <p>Admino laukas(jei reikia)</p>
                    <p>Admino laukas(jei reikia)</p>
                </Fragment>
            );
        case 2:
            return (
                <Fragment>
                    <p>Pardavejo laukas(jei reikia)</p>
                </Fragment>
            );
        case 3:
            return (
                <Fragment>
                    <p>Vartotojo laukas(jei reikia)</p>
                    <p>Vartotojo laukas(jei reikia)</p>
                    <p>Vartotojo laukas(jei reikia)</p>
                </Fragment>
            );
        default:
            break;
    }
};

export default Griauciai;
