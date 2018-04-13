import React from "react";
import { Link } from "react-router-dom";
// PrimeReact elements
import { Button } from "primereact/components/button/Button";

const Header = () => {
    return (
        // <div className="ui-g">
        <header>
            <Link
                to="/"
                className="header_bookStore"
                style={{ textDecoration: "none" }}
            >
                <Button
                    label="&ensp;Knygų parduotuvėlė"
                    icon="fa fa-book"
                    cornerStyleClass="header_bookStore"
                />
            </Link>
            <Button
                label="Pagalbos centras"
                className="helpas"
                cornerStyleClass="help_support"
            />
            <Button label="Susisiekite" cornerStyleClass="help_support" />
            {/* <Button
                label="Prisijungti &nbsp;"
                icon="fa fa-check-circle"
                iconPos="right"
                className="login"
            /> */}
        </header>
        // </div>
    );
};

export default Header;
