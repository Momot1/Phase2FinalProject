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
        history.push("/")
    }

    function updateFormData(key, value){
        const updatedForm = {...formData}
        updatedForm[key] = value
        setFormData(updatedForm)
    }

    console.log(formData)

    return (
        <form id="signup-form" onSubmit={handleSubmit}>
            <input type="textbox" placeholder="First Name" value={formData.firstName} onChange={e => updateFormData("firstName", e.target.value)} required />
            <input type="textbox" placeholder="Last Name" value={formData.lastName} onChange={e => updateFormData("lastName", e.target.value)} required />
            <input type="email" placeholder="Email Address" value={formData.email} onChange={e => updateFormData("email", e.target.value)} required />
            <input type="textbox" placeholder="Username" value={formData.username} onChange={e => updateFormData("username", e.target.value)} required />
            <input type="password" placeholder="Password" value={formData.password} onChange={e => updateFormData("password", e.target.value)} required />
            <input type="button" value="Already have an account? Login" onClick={handleLoginClick}/>
            <input type="submit" placeholder="Create Account" />
        </form>
    )
}

export default Signup