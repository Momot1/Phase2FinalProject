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
                className="links"
                id="home-link"
            >
                Home
            </NavLink>
            <NavLink 
                to="/items"
                exact 
                className="links"
                id="items-link"
            >
                Items
            </NavLink>
            <NavLink 
                to="/items/new"
                exact
                className="links"
                id="new-link"
            >
                New Item
            </NavLink>
        </div>
    )
}

export default NavBar