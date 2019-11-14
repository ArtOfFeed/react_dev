import React from 'react';
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">
                Note app
            </div>
            <ul className="navbar-nav">
                <li className="navbar-item"><NavLink className="nav-link" to={'/'} exact>Home Page</NavLink></li>
                <li className="navbar-item"><NavLink className="nav-link" to={'/about'} exact>About Page</NavLink></li>
            </ul>
        </nav>
    )
}