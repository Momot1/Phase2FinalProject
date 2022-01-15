import React, {useState} from "react";
import { useHistory } from "react-router-dom"

function NewItem({isLoggedIn}){
    const history = useHistory()

    if(isLoggedIn === false){
        history.push("/login")
    }

    const [formData, setFormData] = useState({
        name : "",
        description: "",
        price: "",
        purchase: "",
        image: ""
    })

    function updateForm(e, input){
        setFormData({...formData, [input]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()

        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(formData)
        })
            .then(resp => resp.json())
            .then(() => {
                history.push("/")
            })
    }

    return <div id="new-item">
        <h1>New Wishlist Item</h1>
        <form id="new-item-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input name="name" type="text" placeholder="Enter Name" value={formData.name} onChange={e => updateForm(e, "name")}></input> <br></br>
            <label htmlFor="description">Description: </label>
            <input name="description" type="text" placeholder="Description" value={formData.description} onChange={e => updateForm(e, "description")} /><br/>
            <label htmlFor="price">Price: </label>
            <input name="price" type="text" placeholder="Price" value={formData.price} onChange={e => updateForm(e, "price")} /><br/>
            <label htmlFor="purchaseLink">Purchase Link: </label>
            <input name="purchaseLink" type="text" placeholder="Purchase Link" value={formData.purchase} onChange={e => updateForm(e, "purchase")}/><br/>
            <label htmlFor="image">Image URL: </label>
            <input type="text" placeholder="Image URL" value={formData.image} onChange={e => updateForm(e, "image")} /><br/>
            <input type="submit" value="Submit" id="form-submit"></input>
        </form>
    </div>
}

export default NewItem