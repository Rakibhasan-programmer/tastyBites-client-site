import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Menu from "./Menu";
import Testimonial from "./Testimonial";
import Featured from "./Featured";
import DynamicTitle from "../../Components/DynamicTitle";

const Home = () => {
  return (
    <>
      <DynamicTitle title={"Home"} />
      <Banner />
      <Category />
      <Menu />
      <Featured />
      <Testimonial />
    </>
  );
};

export default Home;
