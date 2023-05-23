import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItems from "../shared/MenuItems";
import { Button } from "react-bootstrap";

const Menu = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setItems(popularItems);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="container py-5">
        <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
        <div className="row g-4 d-flex justify-content-center align-items-center">
          {items.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center py-3">
          <Button className="rounded-0" variant="dark">
            View Full Menu
          </Button>
        </div>
      </div>
    </>
  );
};

export default Menu;
