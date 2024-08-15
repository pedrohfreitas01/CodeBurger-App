import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const user = localStorage.getItem("codeburger:userData");

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
