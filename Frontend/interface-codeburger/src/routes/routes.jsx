import React from "react";

import { Login, Register, Home, Products, Cart } from "../containers";

import PrivateRoutes from "./private-routes";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function SwitchRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoutes>
              <Products />
            </PrivateRoutes>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoutes>
              <Cart />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default SwitchRoutes;
