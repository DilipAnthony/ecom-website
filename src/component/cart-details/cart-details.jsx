import React from "react";
import "./cart-details.css"

const CartDetails = ({item: { imageUrl, name, price, quantity }}) => {
    return(
        <div className="cart-area">
            <img src={imageUrl} width="50px" height="70px"/>
            <p>{name}</p>
            <p>*</p>
            <p>{quantity}</p>
            <p>${price * quantity}</p>
            
        </div>
    )
}

export default CartDetails;