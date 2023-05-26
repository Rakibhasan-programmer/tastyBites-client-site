import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItems from "../shared/MenuItems";
import { Button } from "react-bootstrap";
import useMenu from "../../hooks/useMenu";

const Menu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <>
      <div className="container py-5">
        <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
        <div className="row g-4 d-flex justify-content-center align-items-center">
          {popular.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center py-3">
          <Button className="rounded-0 btn-primary text-white" variant="">
            View Full Menu
          </Button>
        </div>
      </div>
    </>
  );
};

export default Menu;
