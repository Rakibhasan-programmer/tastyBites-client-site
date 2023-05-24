import React from "react";
import Cover from "../shared/Cover";
import AllItems from "./AllItems";
import DynamicTitle from "../../Components/DynamicTitle";

const Order = () => {
  return (
    <>
      <DynamicTitle title={"Order"} />
      <Cover title={"ORDER"} />
      <AllItems />
    </>
  );
};

export default Order;
