import React, {useState} from "react";
import { useHistory } from "react-router-dom"

function Signup(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
    })

    const history = useHistory()

    function handleLoginClick(){
        history.push("/login")
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        history.push("/")
    }

    function updateFormData(key, value){
        const updatedForm = {...formData}
        updatedForm[key] = value
        setFormData(updatedForm)
    }

    console.log(formData)

    return (
        <>
        <h1>Signup</h1>
        <form id="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="first name">First Name: </label>
            <input name="first name" type="textbox" placeholder="First Name" value={formData.firstName} onChange={e => updateFormData("firstName", e.target.value)} required /><br/>
            <label htmlFor="last name">Last Name: </label>
            <input name="last name" type="textbox" placeholder="Last Name" value={formData.lastName} onChange={e => updateFormData("lastName", e.target.value)} required /><br/>
            <label htmlFor="email address">Email Address: </label>
            <input name="email address" type="email" placeholder="Email Address" value={formData.email} onChange={e => updateFormData("email", e.target.value)} required /><br/>
            <label htmlFor="username">Username: </label>
            <input name="username" type="textbox" placeholder="Username" value={formData.username} onChange={e => updateFormData("username", e.target.value)} required /><br/>
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" placeholder="Password" value={formData.password} onChange={e => updateFormData("password", e.target.value)} required /><br/>
            <input type="button" value="Already have an account? Login" onClick={handleLoginClick}/><br/>
            <input type="submit" placeholder="Create Account" value="Create Account" />
        </form>
        </>
    )
}

export default Signup