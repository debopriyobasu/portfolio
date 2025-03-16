import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { applyThemeFromQueryParams } from "./utils/applyThemeFromQueryParams";

// Apply theme based on query parameters
applyThemeFromQueryParams();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);