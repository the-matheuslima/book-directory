import React from "react";
import { Link } from "react-router-dom";
import './style.scss'
type Props = {};

function NavBar() {
    return (
        <nav className="navbar">
            <h3><Link to={'/'}>Books</Link></h3>
        </nav>
    );
}

export default NavBar;
