import React from "react";
import img from "../../assets/home/featured.jpg";
import SectionTitle from "../../Components/SectionTitle";
import { Button } from "react-bootstrap";

const Featured = () => {
  return (
    <div className="container featured-bg py-5">
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
      <div className="row g-4 d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <img src={img} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div>
            <h4>March 20, 2023</h4>
            <h4>WHERE CAN I GET SOME?</h4>
            <p className="fw-light py-3 lh-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <Button className="rounded-0 btn-primary" variant="">Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
