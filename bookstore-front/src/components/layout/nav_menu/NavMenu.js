import React from "react";
import { Link } from "react-router-dom";
//custom imports
import css from "./NavMenu.css";
//primereact
import 'primereact/resources/primereact.min.css';
import { Button } from "primereact/components/button/Button";
import nav_css from "./NavMenu.css";

const NavMenu = () => {
    return (
        <div className="ui-g-2">
            <nav className={nav_css.nav}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <Button label="&ensp;Pradinis puslapis" icon="fa fa-home" />
                    {/* <button>Pradinis puslapis</button> */}
                </Link>
                <Link to="/books" style={{ textDecoration: "none" }}>
                    <Button label="&ensp;Visos knygos" icon="fa fa-globe" />
                    {/* <button>Visos knygos</button> */}
                </Link>
                <Link to="/cart" style={{ textDecoration: "none" }}>
                    <Button
                        label="&ensp;Pirkinių krepšelis"
                        icon="fa fa-shopping-cart"
                    />
                    {/* <button>Pirkinių krepšelis</button> */}
                </Link>
                <Link to="/favourite" style={{ textDecoration: "none" }}>
                    <Button
                        label="&ensp;Populiariausios knygos"
                        icon="fa fa-star"
                    />
                    {/* <button>Populiariausios knygos</button> */}
                </Link>
                <Link to="/whishlist" style={{ textDecoration: "none" }}>
                    <Button
                        label="&ensp;Mano pageidavimai"
                        icon="fa fa-heart"
                    />
                    {/* <button>Mano pageidavimai</button> */}
                </Link>
                <Link to="/books/register" style={{ textDecoration: "none" }}>
                    <Button
                        label="&ensp;Knygos registracija"
                        icon="fa fa-book"
                    />
                    {/* <button>Naujos knygos registracija</button> */}
                </Link>
                <Link to="/users/register" style={{ textDecoration: "none" }}>
                    <Button
                        label="&ensp;Vartotojo registracija"
                        icon="fa fa-user"
                    />
                    {/* <button>Naujo vartotojo registracija</button> */}
                </Link>
            </nav>
        </div>
    );
};

export default NavMenu;
