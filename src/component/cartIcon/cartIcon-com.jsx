import React from "react";
import "./cartIcon-style.css";
import {ReactComponent as Bag} from "../../assests/bag.svg"
import {CartDropdownHide, CartItemsAdd} from "../../redux/cart/cart-action"
import {connect} from "react-redux"
import {selectCartItemsCount} from "../../redux/cart/cart-selectors"

const CartIcon = ({CartDropdownHide, cartItems}) => {
    return(
    <div className="cart-parent header-link" onClick={CartDropdownHide}>
        <Bag className="bagIcon" />
        <span className="count">{cartItems}</span>
    </div>
)}

const mapStateToProps = state => ({
    cartItems: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
    CartDropdownHide: () => dispatch(CartDropdownHide())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);