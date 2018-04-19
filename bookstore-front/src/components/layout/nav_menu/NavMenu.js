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
            <h2>User menu</h2>
            <Link to="/books/3">
                <Button label="&ensp;Visos knygos" icon="fa fa-globe" />
            </Link>
            <Link to="/user/register/3" style={{ textDecoration: "none" }}>
                <Button label="&ensp;Registruotis" icon="fa fa-user" />
            </Link>
            <h2>Admin/salesman menu</h2>
            <Link to="/books/1">
                <Button label="&ensp;Visos knygos" icon="fa fa-globe" />
            </Link>
            <Link to="/books/register">
                <Button label="&ensp;Knygos registracija" icon="fa fa-book" />
            </Link>
            <Link to="/users" style={{ textDecoration: "none" }}>
                <Button label="&ensp;Visi vartotojai" icon="fa fa-user" />
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
        </nav>
    );
};

export default NavMenu;
