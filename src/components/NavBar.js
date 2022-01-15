import React from "react";
import { NavLink } from "react-router-dom"

function NavBar({isLoggedIn, onLogout}){
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
                to="/new"
                exact
                className="links"
                id="new-link"
            >
                New Item
            </NavLink>

            { isLoggedIn === false ? 
                <NavLink
                    to="/login"
                    exact
                    className="links"
                    id="login-link"
                >
                    Login
                </NavLink>
                :
                <NavLink
                    to="/logout"
                    exact
                    className="links"
                    id="logout-link"
                    
                    onClick={onLogout}
                >
                    Logout
                </NavLink>
            }
            
        </div>
    )
}

export default NavBar