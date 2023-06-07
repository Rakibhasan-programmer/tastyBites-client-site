import React, { useContext } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const { cart, refetch } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  // logout
  const handleLogOut = () => {
    logOut().then(() => {
      navigate("/", { replace: true });
    });
  };
  // admin -
  // const isAdmin = false;
  const [isAdmin] = useAdmin();
  return (
    <div>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* <!-- Navbar Brand--> */}
        <Link className="navbar-brand ps-3 fs-3 fw-semibold" to={"/"}>
          TastyBites
        </Link>
        {/* <!-- Sidebar Toggle--> */}
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i className="fas fa-bars"></i>
        </button>
        {/* <!-- Navbar Search--> */}
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
        {/* <!-- Navbar--> */}
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                className="img-fluid rounded-circle"
                src={user?.photoURL}
                style={{ height: "2rem", width: "2rem", objectFit: "cover" }}
                alt=""
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <button className="dropdown-item" onClick={handleLogOut}>
                  Logout
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                {isAdmin ? (
                  <>
                    <NavLink
                      to={"/dashboard"}
                      className={
                        location?.pathname === "/dashboard"
                          ? "active nav-link fw-bold px-3"
                          : "nav-link text-white px-3"
                      }
                    >
                      <div className="me-2">
                        <FaHome />
                      </div>
                      Admin Home
                    </NavLink>
                    <NavLink
                      to={"/dashboard/addItem"}
                      className={({ isActive }) =>
                        isActive
                          ? "active nav-link fw-bold px-3"
                          : "nav-link text-white px-3"
                      }
                    >
                      <div className="me-2">
                        <FaUtensils />
                      </div>
                      Add Items
                    </NavLink>
                    <NavLink
                      to={"/dashboard/manageitems"}
                      className={({ isActive }) =>
                        isActive
                          ? "active nav-link fw-bold px-3"
                          : "nav-link text-white px-3"
                      }
                    >
                      <div className="me-2">
                        <FaCalendarAlt />
                      </div>
                      Manage Items
                    </NavLink>
                    <NavLink
                      to={"/dashboard/payment"}
                      className={({ isActive }) =>
                        isActive
                          ? "active nav-link fw-bold px-3"
                          : "nav-link text-white px-3"
                      }
                    >
                      <div className="me-2">
                        <FaBook />
                      </div>
                      Manage Bookings
                    </NavLink>
                    <NavLink
                      to={"/dashboard/users"}
                      className={({ isActive }) =>
                        isActive
                          ? "active nav-link fw-bold px-3"
                          : "nav-link text-white px-3"
                      }
                    >
                      <div className="me-2">
                        <FaUsers />
                      </div>
                      All Users
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to={"/dashboard"}
                      className={
                        location?.pathname === "/dashboard"
                          ? "active nav-link fw-bold px-3"
                          : "nav-link text-white px-3"
                      }
                    >
                      <div className="me-2">
                        <FaHome />
                      </div>
                      User Home
                    </NavLink>
                    <NavLink
                      to={"/dashboard/mycart"}
                      className={({ isActive }) =>
                        isActive
                          ? "active nav-link fw-bold px-3"
                          : "nav-link text-white px-3"
                      }
                    >
                      <div className="me-2">
                        <FaShoppingCart />
                      </div>
                      My Cart
                    </NavLink>
                    <NavLink
                      to={"/dashboard/reservation"}
                      className={({ isActive }) =>
                        isActive
                          ? "active nav-link fw-bold px-3"
                          : "nav-link text-white px-3"
                      }
                    >
                      <div className="me-2">
                        <FaCalendarAlt />
                      </div>
                      Reservation
                    </NavLink>
                    <NavLink
                      to={"/dashboard/payment"}
                      className={({ isActive }) =>
                        isActive
                          ? "active nav-link fw-bold px-3"
                          : "nav-link text-white px-3"
                      }
                    >
                      <div className="me-2">
                        <FaWallet />
                      </div>
                      Payment History
                    </NavLink>
                  </>
                )}
                <div className="sb-sidenav-menu-heading">More Options</div>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              {user?.displayName}
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              {/* <h1 className="mt-4">Dashboard</h1> */}
              <div className="row">
                <Outlet />
              </div>
            </div>
          </main>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">
                  Copyright &copy; tastyBites 2023
                </div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
