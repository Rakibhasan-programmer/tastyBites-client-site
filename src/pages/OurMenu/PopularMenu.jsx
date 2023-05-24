import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItems from "../shared/MenuItems";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PopularMenu = ({ items, heading, subHeading, title }) => {
  return (
    <div>
      <div className="container py-5">
        <SectionTitle heading={heading} subHeading={subHeading} />
        <div className="row g-4 d-flex justify-content-center align-items-center">
          {items.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center py-3">
          <Link to={`/order/${title}`}>
            <Button className="rounded-0" variant="dark">
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularMenu;
