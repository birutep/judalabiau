import React from "react";
import { Link } from "react-router-dom";
//primereact
import { Button } from "primereact/components/button/Button";

const NavMenu = () => {
    return (
        <nav className="nav">
            <Link to="/">
                <Button
                    label="&ensp;Pradinis puslapis"
                    icon="fa fa-home"
                    name="Pradinis puslapis"
                />
            </Link>
            <Link to="/books">
                <Button label="&ensp;Visos knygos" icon="fa fa-globe" />
            </Link>
            {/* <Link to="/cart">
                <Button
                    label="&ensp;Pirkinių krepšelis"
                    icon="fa fa-shopping-cart"
                />
            </Link>
            <Link to="/favourite">
                <Button
                    label="&ensp;Populiariausios knygos"
                    icon="fa fa-star"
                />
            </Link>
            <Link to="/whishlist">
                <Button label="&ensp;Mano pageidavimai" icon="fa fa-heart" />
            </Link> */}
            <Link to="/books/register">
                <Button label="&ensp;Knygos registracija" icon="fa fa-book" />
            </Link>
            
           {/* <===User Register===> */}
            <Link to="/user/register/3" style={{ textDecoration: "none" }}>
                <Button
                    label="&ensp;Vartotojo registracija"
                    icon="fa fa-user"
                />
            </Link>
            <Link to="/user/register/2" style={{ textDecoration: "none" }}>
                <Button
                    label="&ensp;Pardavėjo registracija"
                    icon="fa fa-user"
                />
            </Link>
            <Link to="/user/register/1" style={{ textDecoration: "none" }}>
                <Button
                    label="&ensp;Administratoriaus registracija"
                    icon="fa fa-user"
                />
            </Link>
            <Link to="/users" style={{ textDecoration: "none" }}>
                <Button
                    label="&ensp;Visi vartotojai"
                    icon="fa fa-user"
                />
            </Link>
        </nav>
    );
};

export default NavMenu;