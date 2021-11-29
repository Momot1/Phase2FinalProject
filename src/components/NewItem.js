import React, {useState} from "react";

function NewItem(){
    const [formData, setFormData] = useState({
        name : ""
    })

    function updateName(e){
        setFormData({...formData, name: e.target.value})
    }

    console.log(formData.name)

    return <div id="new-item">
        <h1>New Item</h1>
        <form id="new-item-form">
            <label htmlFor="name">Name: </label>
            <input name="name" type="text" placeholder="Enter Name" value={formData.name} onChange={updateName}></input>
        </form>
    </div>
}

export default NewItem