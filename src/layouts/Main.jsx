import React, { useEffect } from "react";
import NavigationBar from "../pages/shared/NavigationBar";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <>
      {noHeaderFooter || <NavigationBar />}
      <div style={{ minHeight: "40vh" }}>
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
      <ScrollRestoration />
    </>
  );
};

export default Main;
