import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./assets/index.css";

// React V18
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
