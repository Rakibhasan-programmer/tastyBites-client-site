import React from "react";
import Cover from "../shared/Cover";
import useMenu from "../../hooks/useMenu";
import PopularMenu from "./PopularMenu";

const OurMenu = () => {
  const [menu] = useMenu();
//   const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <Cover title={"Our Menu"} />
      <PopularMenu
        items={offered}
        heading={"TODAY'S OFFER"}
        subHeading={"Don't Miss"}
      />
      <PopularMenu
        items={soup}
        heading={"SOUP"}
        subHeading={"Don't Miss"}
      />
      <PopularMenu
        items={salad}
        heading={"SALAD"}
        subHeading={"Don't Miss"}
      />
    </>
  );
};

export default OurMenu;
