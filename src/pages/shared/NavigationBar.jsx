import React, { useEffect } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const nav = document.querySelector("nav");
      if (window.scrollY > 850) {
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
              <Nav.Link href="#action1" className="text-white px-3">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white px-3">
                Contact us
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white px-3">
                Dashboard
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white px-3">
                Our Menu
              </Nav.Link>
              <Nav.Link href="#action2" className="text-white px-3">
                Our Shop
              </Nav.Link>
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
