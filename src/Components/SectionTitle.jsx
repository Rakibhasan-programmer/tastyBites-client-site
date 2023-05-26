import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="container text-center pb-5">
      <p className="" style={{color: "#FFA300"}}>----{subHeading}----</p>
      <h2 className="section-border py-2 w-25 mx-auto">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
