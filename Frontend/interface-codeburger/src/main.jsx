import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./styles/globalStyles";
import { ToastContainer, toast } from "react-toastify";
import SwitchRoutes from "./routes/routes";
import AppProvider from "./hooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <AppProvider>
        <SwitchRoutes/>
      </AppProvider>
      <ToastContainer theme="colored" />
      <GlobalStyles></GlobalStyles>
    </>
  </React.StrictMode>
);
