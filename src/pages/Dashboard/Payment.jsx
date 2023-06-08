import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../hooks/useCart";

const stripePromise = loadStripe(
  "pk_test_51NGkG6Iy3s0p8WtXjeeDNhVHgnUQnCNtnkHDobiVg4AwdxatRhc6tIbKivtWeMuqk5CeOCcKT7HlLo6HcRI4Vitw00M5Hb4bHc"
);
const Payment = () => {
  const [cart] = useCart();
  // total sum
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="py-3">
      <SectionTitle heading={"PAYMENT"} subHeading={"Please provide"} />
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
