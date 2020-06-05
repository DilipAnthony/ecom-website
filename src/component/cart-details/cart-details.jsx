import React from "react";
import "./cart-details.css"

const CartDetails = ({item: { imageUrl, name, price }}) => {
    return(
        <div className="cart-area">
            <img src={imageUrl} width="50px" height="70px"/>
            <p>{name}</p>
            <p>${price}</p>
        </div>
    )
}

export default CartDetails;