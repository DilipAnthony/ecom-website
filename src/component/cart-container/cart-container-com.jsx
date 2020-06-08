import React from "react";
import "./cart-container-style.css";
import {connect} from "react-redux";
import CartDetails from "../cart-details/cart-details"
import {withRouter} from "react-router";
import {CartDropdownHide, CartItemsAdd} from "../../redux/cart/cart-action"

const CartContainer = ({cartItems, history, CartDropdownHide}) => {
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
        
        <input className="submit child" id="check-out" type="submit" value="CHECK OUT" onClick={() => {history.push("/checkout"); CartDropdownHide()}}/>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    CartDropdownHide: () => dispatch(CartDropdownHide())
})

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartContainer));