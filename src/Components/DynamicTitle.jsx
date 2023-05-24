import React from "react";
import { Helmet } from "react-helmet";

const DynamicTitle = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>tastyBites | {title}</title>
      </Helmet>
    </>
  );
};

export default DynamicTitle;
