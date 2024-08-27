import React from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { Header } from "../components/Header";

function PrivateRoutes({ children }) {
  const user = localStorage.getItem("codeburger:userData");

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
}

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;
