import React from "react";
import {useHistory} from "react-router-dom"

function Login(){
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        history.push("/")
    }

    function handleCreateAccountClick(){
        history.push("/signup")
    }

    return (
        <form id="login-form" onSubmit={handleSubmit}>
            <input type="textbox" placeholder="Email/Username" value="" required />
            <input type="password" placeholder="Password" value="" required />
            <input type="button" value="Don't have an account? Create one" onClick={handleCreateAccountClick}/>
            <input type="submit" value="Login"/>
        </form>
)}

export default Login