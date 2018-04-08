import React from "react";
import { Link } from "react-router-dom";
//primereact
import { Button } from "primereact/components/button/Button";


const NavMenu = () => {
    return (
        <nav className="nav">
            <Link to="/" style={{ textDecoration: "none" }}>
                <Button label="&ensp;Pradinis puslapis" icon="fa fa-home" />
            </Link>
            <Link to="/books" style={{ textDecoration: "none" }}>
                <Button label="&ensp;Visos knygos" icon="fa fa-globe" />
            </Link>
            <Link to="/cart" style={{ textDecoration: "none" }}>
                <Button
                    label="&ensp;Pirkinių krepšelis"
                    icon="fa fa-shopping-cart"
                />
            </Link>
            <Link to="/favourite" style={{ textDecoration: "none" }}>
                <Button
                    label="&ensp;Populiariausios knygos"
                    icon="fa fa-star"
                />
            </Link>
            <Link to="/whishlist" style={{ textDecoration: "none" }}>
                <Button label="&ensp;Mano pageidavimai" icon="fa fa-heart" />
            </Link>
            <Link to="/books/register" style={{ textDecoration: "none" }}>
                <Button label="&ensp;Knygos registracija" icon="fa fa-book" />
            </Link>
            <Link to="/users/register" style={{ textDecoration: "none" }}>
                <Button
                    label="&ensp;Vartotojo registracija"
                    icon="fa fa-user"
                />
            </Link>
        </nav>
    );
};

export default NavMenu;
