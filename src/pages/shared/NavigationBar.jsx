import React, { useContext, useEffect } from "react";
import { Badge, Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  // sign out
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  // scroll spy
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const nav = document.querySelector("nav");
      if (window.scrollY > 250) {
        nav.classList.remove("bg-transparent");
      } else {
        nav.classList.add("bg-transparent");
      }
    });
  }, []);

  return (
    <>
      <Navbar className="py-3 fixed-top bg-dark" expand="lg">
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
              <NavLink to={"/"} className="nav-link text-white px-3">
                <p>
                  <FaShoppingCart />{" "}
                  <Badge bg="secondary">{cart?.length || 0}</Badge>
                </p>
              </NavLink>
            </Nav>
            <div className="d-flex">
              {user && (
                <Button className="px-3 me-2 btn-primary">
                  {user?.displayName}
                </Button>
              )}
              {user && user?.displayName ? (
                <Button
                  className="px-3"
                  variant="danger"
                  onClick={handleSignOut}
                >
                  SignOut
                </Button>
              ) : (
                <Link to={"/login"} className="btn btn-primary px-3">
                  Login
                </Link>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
