import React from "react";
import CheckoutContent from "../../component/checkout-com/checkoutContent-com";
import "./checkout-style.css";
import { auth } from "../../firebase/firebase-utils.js";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Checkout = ({ isSignedIn }) => {
  const user = auth.currentUser;
  console.log("Current user is " + JSON.stringify(isSignedIn));
  console.log("test user" + user);
  if (isSignedIn) {
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

const mapStateToProps = (state) => ({
  isSignedIn: state.user.isSignedIn,
});

export default connect(mapStateToProps)(Checkout);
