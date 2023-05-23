import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import MenuItems from "../shared/MenuItems";

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
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
      <div className="container">
        <div className="row g-4 d-flex justify-content-center align-items-center">
          {items.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
