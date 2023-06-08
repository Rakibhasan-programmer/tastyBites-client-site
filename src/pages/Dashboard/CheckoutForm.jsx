import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const CheckoutForm = () => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    // creating
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        {cardError && <p className="text-danger">{cardError?.message}</p>}
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <Button className="mt-3" type="submit" disabled={!stripe}>
          Pay
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
