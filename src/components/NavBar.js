import React from "react";
import { NavLink } from "react-router-dom"

function NavBar(){
    return (
        <div id="navbar">
            <NavLink 
                to="/"
                exact
                className="links"
                id="home-link"
            >
                Home
            </NavLink>
            
            <NavLink 
                to="/items/new"
                exact
                className="links"
                id="new-link"
            >
                New Item
            </NavLink>

            <NavLink 
                to="/login"
                exact
                className="links"
                id="login-link"
            >
                Login
            </NavLink>
        </div>
    )
}

export default NavBar