import React from "react";
import StripeCheckout from "react-stripe-checkout";

function PayButton() {
  const onToken = (token) => {
    console.log(token);
  };
  
  
  return (
    <>
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51MwmSdGLu9lhE68vcDIB7Y5aEBxLk31BxWoJnkxfqG45fMMofZY9NgnOtfCh5dJngzrv2n5UnoDFhHxjZvno0y5r00V5lAyZ3y"
      />
    </>
  );
}

export default PayButton;
