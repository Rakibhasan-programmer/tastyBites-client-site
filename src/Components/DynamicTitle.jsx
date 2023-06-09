import React from "react";
import { Helmet } from "react-helmet";

const DynamicTitle = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>TastyBites | {title}</title>
      </Helmet>
    </>
  );
};

export default DynamicTitle;
