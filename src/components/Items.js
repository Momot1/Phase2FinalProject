import React, {useEffect, useState} from "react";
import Item from "./Item";

function Items(){
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/items")
            .then(resp => resp.json())
            .then(data => setItems(data))
    }, [])

    const itemElements = items.map(item => <Item key={item.id} name={item.name} description={item.description} image={item.image} onItemDelete={handleDelete} id={item.id}/>)

    function handleDelete(id){
        fetch(`http://localhost:3000/items/${id}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(() => {
                const updatedItems = items.filter(item => item.id !== id)
                setItems(updatedItems)
            })
    }

    return (
        <div>
            {itemElements}
        </div>
    )
}

export default Items