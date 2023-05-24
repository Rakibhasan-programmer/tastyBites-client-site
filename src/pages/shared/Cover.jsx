import React from "react";

const Cover = ({ title }) => {
  return (
    <div className="cover-bg d-flex justify-content-center align-items-center">
      <div>
        <h2 className="fs-1 fw-bold text-white">{title}</h2>
      </div>
    </div>
  );
};

export default Cover;
