import React from "react";

const MenuItems = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <>
      <div className="col-md-6">
        <div className="d-flex justify-between">
          <div style={{ width: "8rem" }}>
            <img
              className="img-fluid"
              src={image}
              alt=""
              style={{ borderRadius: "0px 200px 200px 200px" }}
            />
          </div>
          <div className="px-3">
            <h5 className="text-uppercase">{name}</h5>
            <p className="fw-light">{recipe}</p>
          </div>
          <p className="text-warning">${price}</p>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
