import React from "react";
import Cover from "../shared/Cover";
import useMenu from "../../hooks/useMenu";
import PopularMenu from "./PopularMenu";
import DynamicTitle from "../../Components/DynamicTitle";

const OurMenu = () => {
  const [menu] = useMenu();
  //   const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <DynamicTitle title={"Our Menu"} />
      <Cover title={"Our Menu"} />
      <PopularMenu
        items={offered}
        title={"pizza"}
        heading={"TODAY'S OFFER"}
        subHeading={"Don't Miss"}
      />
      <PopularMenu
        items={soup}
        title={"soup"}
        heading={"SOUP"}
        subHeading={"Don't Miss"}
      />
      <PopularMenu
        items={salad}
        title={"salad"}
        heading={"SALAD"}
        subHeading={"Don't Miss"}
      />
    </>
  );
};

export default OurMenu;
