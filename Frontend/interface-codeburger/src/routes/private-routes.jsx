import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { Header } from "../components/Header";

function PrivateRoutes({ children , isAdmin}) {
  const user = localStorage.getItem("codeburger:userData");

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {!isAdmin && <Header />}
      {children}
    </>
  );
}

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
  isAdmin: PropTypes.bool,
};

export default PrivateRoutes;
