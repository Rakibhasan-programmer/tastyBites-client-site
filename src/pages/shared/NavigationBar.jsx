import React, { useEffect } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const nav = document.querySelector("nav");
      if (window.scrollY > 250) {
        nav.classList.remove("bg-transparent");
        nav.classList.add("bg-dark");
      } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-dark");
      }
    });
  }, []);

  return (
    <>
      <Navbar
        className="navbar-dark py-3 fixed-top bg-transparent"
        bg="dark"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-3">
            TastyBites
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
              <NavLink to={"/"} className="text-white px-3 nav-link">
                Home
              </NavLink>
              <NavLink to={"/menu"} className="text-white px-3 nav-link">
                Our Menu
              </NavLink>
              <NavLink to={"/contact"} className="text-white px-3 nav-link">
                Contact US
              </NavLink>
              <NavLink to={"/dashboard"} className="text-white px-3 nav-link">
                Dashboard
              </NavLink>
              <NavLink to={"/order/salad"} className="text-white px-3 nav-link">
                Order
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
