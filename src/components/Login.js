import React, {useState} from "react";
import {useHistory} from "react-router-dom"

function Login(){
    const history = useHistory()

    const [formData, setFormData] = useState({username: "", password: ""})
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    function handleSubmit(e){
        e.preventDefault()

        fetch("http://localhost:3000/users")
            .then(resp => resp.json())
            .then(users => {
                const user = users.find(user => {
                    if(formData.username.toLowerCase() === user.username.toLowerCase() || formData.username == user.email){
                        return user
                    }
                })
                
                if(user != undefined  && user.password === formData.password){
                    history.push("/")
                } else{
                    console.log("incorrect username/pass")
                }

            })
    }

    function handleCreateAccountClick(){
        history.push("/signup")
    }

    function updateForm(key, value){
        const updatedForm = {...formData}
        updatedForm[key] = value
        setFormData(updatedForm)
    }

    return (
        <form id="login-form" onSubmit={handleSubmit}>
            <input type="textbox" placeholder="Email/Username" value={formData.username} onChange={e => updateForm("username", e.target.value)} required />
            <input type="password" placeholder="Password" value={formData.password} onChange={e => updateForm("password", e.target.value)} required />
            <p className="hidden">Incorrect username/password</p>
            <input type="button" value="Don't have an account? Create one" onClick={handleCreateAccountClick}/>
            <input type="submit" value="Login"/>
        </form>
)}

export default Login