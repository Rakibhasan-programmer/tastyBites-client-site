import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NGkG6Iy3s0p8WtXjeeDNhVHgnUQnCNtnkHDobiVg4AwdxatRhc6tIbKivtWeMuqk5CeOCcKT7HlLo6HcRI4Vitw00M5Hb4bHc"
);
const Payment = () => {
  return (
    <div className="py-3">
      <SectionTitle heading={"PAYMENT"} subHeading={"Please provide"} />
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
