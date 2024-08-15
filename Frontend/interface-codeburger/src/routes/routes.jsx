import React from "react";
import Login from "../containers/Login";
import Register from "../containers/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function SwitchRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    );

}


export default SwitchRoutes;