import React from "react";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Home from "../containers/Home";
import PrivateRoutes from "./private-routes";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "../containers/Products";

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
      </Routes>
    </BrowserRouter>
  );
}

export default SwitchRoutes;
