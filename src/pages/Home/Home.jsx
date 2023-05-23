import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Menu from "./Menu";
import Testimonial from "./Testimonial";
import Featured from "./Featured";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <Menu />
      <Featured />
      <Testimonial />
    </>
  );
};

export default Home;
