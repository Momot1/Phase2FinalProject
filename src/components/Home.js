import React, {useEffect, useState} from "react";
import Item from "./Item";

function Items(){
    const [search, setSearch] = useState("")
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/items")
            .then(resp => resp.json())
            .then(data => setItems(data))
    }, [])

    const itemElements = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map(item => <Item key={item.id} name={item.name} description={item.description} image={item.image} onItemDelete={handleDelete} id={item.id}/>)

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

    if(search !== ""){
        const searchedItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        console.log(searchedItems)
    }

    console.log(search)

    return (
        <div>
            <input type="text" value={search} placeholder="Search" onChange={e => setSearch(e.target.value)}/>
            {itemElements}
            <h2>More items</h2>
        </div>
    )
}

export default Items