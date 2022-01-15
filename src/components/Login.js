import React, {useState} from "react";
import {useHistory} from "react-router-dom"

function Login({onUpdateIsLoggedIn}){
    const history = useHistory()

    const [formData, setFormData] = useState({username: "", password: ""})
    const [correctCrodentials, setCorrectCrodentials] = useState(true)

    function handleSubmit(e){
        e.preventDefault()

        fetch("http://localhost:3000/users")
            .then(resp => resp.json())
            .then(users => {
                const user = users.find(user => {
                    if(formData.username.toLowerCase() === user.username.toLowerCase() || formData.username === user.email){
                        return user
                    } else{
                        return undefined
                    }
                })
                
                if(user !== undefined  && user.password === formData.password){
                    onUpdateIsLoggedIn()
                    history.push("/")
                } else{
                    console.log("incorrect username/pass")
                    setCorrectCrodentials(false)
                }

            })
    }

    function handleCreateAccountClick(){
        history.push("/signup")
    }

    function updateForm(key, input){
        const updatedForm = {...formData}
        updatedForm[key] = input
        setFormData(updatedForm)
    }

    return (
        <>
        <h1>Login</h1>
        <form id="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email/username">Email/Username: </label>
            <input name="email/username" type="textbox" placeholder="Email/Username" value={formData.username} onChange={e => updateForm("username", e.target.value)} required /><br/>
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" placeholder="Password" value={formData.password} onChange={e => updateForm("password", e.target.value)} /><br/>
            {correctCrodentials === false ? <p className="hidden" id="incorrect-login">Incorrect username/password</p> : null}
            <input type="button" value="Don't have an account? Create one" onClick={handleCreateAccountClick}/><br/>
            <input type="submit" value="Login"/>
        </form>
        </>
)}

export default Login