import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { CartEmpty } from "../../redux/cart/cart-action";
import { Route, Switch, Redirect } from "react-router-dom";

const StripeCheckoutButton = ({ price, CartEmpty, cartItems }) => {
  const dollarPrice = price * 100;
  const apiPublishableKey =
    "pk_test_51H45UsKKP9rfP7fm9FdlZAba9bbbGqX6lg2NnbXXE4GyhIDoQMSYfL8owJdM29UniQU853BneE0QegiKyNJgdMVZ00kcAW9nIz";

  const onTokenSuccess = (token) => {
    console.log(token);
    alert("Payment Success");
    CartEmpty();
    console.log(cartItems.length);
  };

  return (
    <div>
      <StripeCheckout
        name="Shoppers Area"
        description="Pay for SA"
        shippingAddress
        billingAddress
        token={onTokenSuccess}
        label="Pay now"
        panelLabel="Pay now"
        amount={dollarPrice}
        stripeKey={apiPublishableKey}
        currency="INR"
      />

      <Route
        exact
        path="/checkout"
        render={() => (cartItems.length === 0 ? <Redirect to="/" /> : null)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  CartEmpty: () => dispatch(CartEmpty()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripeCheckoutButton);
