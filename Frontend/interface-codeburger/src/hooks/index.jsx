import React from "react";
import { UserProvider } from "./UserContext";
import PropTypes from "prop-types";
import { CartProvider } from "./CartContext";

const AppProvider = ({ children }) => (
  <CartProvider>
    <UserProvider UserProvider> {children}</UserProvider>
  </CartProvider>
);

AppProvider.propTypes = {
  children: PropTypes.string,
};

export default AppProvider;
