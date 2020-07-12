import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const dollarPrice = price * 100;
  const apiPublishableKey =
    "pk_test_51H45UsKKP9rfP7fm9FdlZAba9bbbGqX6lg2NnbXXE4GyhIDoQMSYfL8owJdM29UniQU853BneE0QegiKyNJgdMVZ00kcAW9nIz";

  const onTokenSuccess = (token) => {
    console.log(token);
    alert("Payment Success");
  };

  return (
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
  );
};

export default StripeCheckoutButton;
