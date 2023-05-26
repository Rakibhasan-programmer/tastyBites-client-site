import React, { useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

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
      <Navbar className="py-3 fixed-top bg-transparent" expand="lg">
        <Container>
          <Link
            to={"/"}
            className="fw-bold fs-3 text-white text-decoration-none"
          >
            TastyBites
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "active nav-link fw-bold px-3"
                    : "nav-link text-white px-3"
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/menu"}
                className={({ isActive }) =>
                  isActive
                    ? "active nav-link fw-bold px-3"
                    : "nav-link text-white px-3"
                }
              >
                Our Menu
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "active nav-link fw-bold px-3"
                    : "nav-link text-white px-3"
                }
              >
                Contact US
              </NavLink>
              <NavLink
                to={"/dashboard"}
                className={({ isActive }) =>
                  isActive
                    ? "active nav-link fw-bold px-3"
                    : "nav-link text-white px-3"
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to={"/order/salad"}
                className={({ isActive }) =>
                  isActive
                    ? "active nav-link fw-bold px-3"
                    : "nav-link text-white px-3"
                }
              >
                Order
              </NavLink>
            </Nav>
            <div className="d-flex">
              <Link to={"/login"} className="btn btn-primary px-3">Login</Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
