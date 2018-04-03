import React from "react";
import { Link } from "react-router-dom";
//custom imports
import css from "./NavMenu.css";
//primereact
import 'primereact/resources/primereact.min.css';

const NavMenu = () => {
    return (
        <div className={css.leftMenu}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button>Home</button>
            </Link>
            <Link to="/books" style={{ textDecoration: 'none' }}>
                <button>All books</button>
            </Link>
            <Link to="/books/register" style={{ textDecoration: 'none' }}>
                <button>Add book</button>
            </Link>
            <Link to="/users/register" style={{ textDecoration: 'none' }}>
                <button>Add user</button>
            </Link>
        </div>
    );
};

export default NavMenu;
