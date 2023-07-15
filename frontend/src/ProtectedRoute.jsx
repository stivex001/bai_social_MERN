import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/authContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="login" />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
