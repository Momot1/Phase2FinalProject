import React, {useEffect, useState} from "react";

function Items(){
    const [items, setItems] = useState([])



    fetch("http://localhost:3000/items")
            .then(resp => resp.json())
            .then(data => console.log(data))

    return <h1>ITEMS</h1>
}

export default Items