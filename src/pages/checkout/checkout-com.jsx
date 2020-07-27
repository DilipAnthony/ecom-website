import React from "react";
import CheckoutContent from "../../component/checkout-com/checkoutContent-com";
import "./checkout-style.css";
import { auth } from "../../firebase/firebase-utils.js";
import { Route, Switch, Redirect } from "react-router-dom";

const Checkout = () => {
  const user = auth.currentUser;
  console.log("Alpha testing" + user);
  if (user) {
    return (
      <div className="checkout">
        <CheckoutContent />
      </div>
    );
  } else {
    alert("Please login");
    return <Redirect to="/signin" />;
  }
};

export default Checkout;
