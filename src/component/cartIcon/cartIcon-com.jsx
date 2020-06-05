import React from "react";
import "./cartIcon-style.css";
import {ReactComponent as Bag} from "../../assests/bag.svg"
import {CartDropdownHide} from "../../redux/cart/cart-action"
import {connect} from "react-redux"

const CartIcon = ({CartDropdownHide}) => (
    <div className="cart-parent header-link" onClick={CartDropdownHide}>
        <Bag className="bagIcon" />
        <span className="count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    CartDropdownHide: () => dispatch(CartDropdownHide())
})

export default connect(null, mapDispatchToProps)(CartIcon);