import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./containers/Login";
import GlobalStyles from "./styles/globalStyles";
import Register from "./containers/Register/index";

import { ToastContainer, toast } from "react-toastify";
import { UserProvider } from "./hooks/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <UserProvider>
        <Login></Login>
      </UserProvider>
      <ToastContainer theme="colored" />
      <GlobalStyles></GlobalStyles>
    </>
  </React.StrictMode>
);
