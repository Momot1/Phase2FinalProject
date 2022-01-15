import React, {useEffect, useState} from "react";
import WishlistItem from "./WishlistItem";

function Home(){
    const [search, setSearch] = useState("")
    const [wishlistItems, setItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/items")
            .then(resp => resp.json())
            .then(data => setItems(data))
    }, [])

    const itemElements = wishlistItems.filter(searchedWish => searchedWish.name.toLowerCase()
        .includes(search.toLowerCase()))
        .map(wishItem => <WishlistItem 
                            key={wishItem.id} 
                            name={wishItem.name} 
                            description={wishItem.description} 
                            image={wishItem.image} 
                            onItemDelete={handleDelete} 
                            id={wishItem.id}
                            price={wishItem.price}
                            purchaseLink={wishItem.purchase}/>)

    function handleDelete(id){
        fetch(`http://localhost:3000/items/${id}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(() => {
                const updatedItems = wishlistItems.filter(item => item.id !== id)
                setItems(updatedItems)
            })
    }

    return (
        <div>
            <input type="text" value={search} placeholder="Search" onChange={e => setSearch(e.target.value)} id="searchBar"/>
            <h2>Wishlist</h2>
            {itemElements}
        </div>
    )
}

export default Home