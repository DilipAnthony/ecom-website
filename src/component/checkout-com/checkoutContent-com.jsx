import React from "react";
import "./checkoutContent-style.css";
import { connect } from "react-redux";
import { CartClearItems } from "../../redux/cart/cart-action";
import StripeCheckoutButton from "../stripeCheckout/stripeCheckout-com";

const CheckoutContent = ({ cartItems, CartClearItems }) => {
  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="checkout-parent">
      <div className="checkout-title">
        <h1 className="title-child">Product</h1>
        <h1 className="title-child">Description</h1>
        <h1 className="title-child">Quantity</h1>
        <h1 className="title-child">Price</h1>
        <h1 className="title-child">Remove</h1>
      </div>
      {cartItems.map((item) => {
        return (
          <div className="checkout-title">
            <img
              className="title-child img"
              src={item.imageUrl}
              width="120px"
              height="150px"
            />
            <h1 className="title-child name">{item.name}</h1>
            <h1 className="title-child quantity">
              <div>-</div>
              {item.quantity}
              <div>+</div>
            </h1>
            <h1 className="title-child price">{item.price}</h1>
            <div className="title-child X" onClick={() => CartClearItems(item)}>
              <h1>X</h1>
            </div>
          </div>
        );
      })}

      <div className="checkout-title total-price">
        <h1 className="title-child">Total</h1>
        <h1 className="title-child">${total}</h1>
      </div>
      <div>
        <div className="stripe">
          <StripeCheckoutButton price={total} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  CartClearItems: (item) => dispatch(CartClearItems(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContent);
