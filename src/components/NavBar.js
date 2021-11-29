import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };



function NavBar(){
    return (
        <div id="navbar">
            <NavLink 
                to="/"
                exact
                style={linkStyles}
            >
                Home
            </NavLink>
            <NavLink 
                to="/items"
                exact 
                style={linkStyles}
            >
                Items
            </NavLink>
            <NavLink 
                to="items/new"
                exact
                style={linkStyles}
            >
                New Item
            </NavLink>
        </div>
    )
}

export default NavBar