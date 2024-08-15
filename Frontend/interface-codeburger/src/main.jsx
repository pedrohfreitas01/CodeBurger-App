import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./styles/globalStyles";
import { ToastContainer, toast } from "react-toastify";
import { UserProvider } from "./hooks/UserContext";
import SwitchRoutes from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <UserProvider>
        <SwitchRoutes/>
      </UserProvider>
      <ToastContainer theme="colored" />
      <GlobalStyles></GlobalStyles>
    </>
  </React.StrictMode>
);
