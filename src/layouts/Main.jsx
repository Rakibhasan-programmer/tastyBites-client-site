import React, { useEffect } from "react";
import NavigationBar from "../pages/shared/NavigationBar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/shared/Footer";

const Main = () => {
  return (
    <>
      <NavigationBar />
      <div style={{ minHeight: "40vh" }}>
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Main;
