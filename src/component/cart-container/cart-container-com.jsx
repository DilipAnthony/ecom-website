import React from "react";
import "./cart-container-style.css";
import {connect} from "react-redux";
import CartDetails from "../cart-details/cart-details"

const CartContainer = ({cartItems}) => {
    console.log("items are" + cartItems);
    
    return (

    <div className="cart-dropdown">
    {cartItems.length
    ?
        <div>
        {
            cartItems.map(item => <CartDetails key={item.id} item={item} />)
        }
        </div>
    :
    <h1>Your Cart is Empty</h1>}
        
        <input className="submit child" id="check-out" type="submit" value="CHECK OUT" />
    </div>
)}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartContainer);