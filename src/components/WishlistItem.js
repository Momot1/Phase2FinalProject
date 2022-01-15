import React, {useState} from "react";

function WishlistItem({name, description, image, onItemDelete, id, price, purchaseLink}){
    const [isImageClicked, setisImageClicked] = useState(false)

    if(isImageClicked === false){
        return <div className="wishItem">{getImage()}</div>
    }

    function getImage(){
        return <img src={image} alt={name} width="25%" onClick={() => setisImageClicked(!isImageClicked)}/>
    }

    return (
        <div className="wishItem">
            {getImage()}<br />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>${price}</p>
            <p><a href={purchaseLink}>Purchase Link</a></p>
            <button onClick={() => onItemDelete(id)}>DELETE</button>
        </div>
    )
}

export default WishlistItem