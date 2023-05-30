import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow">
        <Container>
          <NavLink to={"/"} className="nav-link fs-2 fw-semibold">
            TastyBites
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link> */}
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 bg-light" style={{ minHeight: "100vh" }}>
            <div className="p-5">
              <Link to={"/dashboard"} className="fs-5 d-block py-2 nav-link">
                Dashboard
              </Link>
              <Link
                to={"/dashboard/mycart"}
                className="fs-5 d-block py-2 nav-link"
              >
                My Cart
              </Link>
            </div>
          </div>
          <div className="col-md-9 pt-2">
            <div className="p-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
