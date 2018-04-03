import React from "react";
import { Link } from "react-router-dom";
import css from "./Header.css";
// PrimeReact elements
import { Button } from "primereact/components/button/Button";

const Header = () => {
    return (
        // <div className="ui-g">
        <header>
            <Link
                to="/"
                className={css.header_bookStore}
                style={{ textDecoration: "none" }}
            >
                <Button
                    label="&ensp;Knygų parduotuvėlė"
                    icon="fa fa-book"
                    cornerStyleClass={css.header_bookStore}
                />
            </Link>
            <Button
                label="Pagalbos centras"
                className={css.helpas}
                cornerStyleClass={css.help_support}
            />
            <Button label="Susisiekite" cornerStyleClass={css.help_support} />
            <Button
                label="Prisijungti &nbsp;"
                icon="fa fa-check-circle"
                iconPos="right"
                className={css.login}
            />
        </header>
        // </div>
    );
};

export default Header;
