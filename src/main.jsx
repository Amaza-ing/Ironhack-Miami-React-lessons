import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode> -> commented so we don't execute some things twice
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>,
);
