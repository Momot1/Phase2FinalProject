import React, {useState} from "react";

function Item({name, description, image, onItemDelete, id}){
    const [isImageClicked, setisImageClicked] = useState(false)

    if(isImageClicked === false){
        return <div className="item">{getImage()}</div>
    }

    function getImage(){
        return <img src={image} alt={name} height="400px" width="400px" onClick={() => setisImageClicked(!isImageClicked)}/>
    }

    return (
        <div className="item">
            {getImage()}<br />
            <h1>{name}</h1>
            <p>{description}</p>
            <button onClick={() => onItemDelete(id)}>DELETE</button>
        </div>
    )
}

export default Item
