import React from "react";
import { useHistory } from "react-router-dom"

function Signup(){
    const history = useHistory()

    function handleLoginClick(){
        history.push("/login")
    }

    function handleSubmit(e){
        e.preventDefault()
        history.push("/")
    }

    return (
        <form id="signup-form" onSubmit={handleSubmit}>
            <input type="textbox" placeholder="First Name" value="" required />
            <input type="textbox" placeholder="Last Name" value="" required />
            <input type="email" placeholder="Email Address" value="" required />
            <input type="textbox" placeholder="Username" value="" required />
            <input type="password" placeholder="Password" value="" required />
            <input type="button" value="Already have an account? Login" onClick={handleLoginClick}/>
            <input type="submit" placeholder="Create Account" />
        </form>
    )
}

export default Signup