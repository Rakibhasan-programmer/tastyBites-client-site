import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <>
        <div className="text-center pt-4">
          <Spinner variant="primary"></Spinner>
        </div>
      </>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
