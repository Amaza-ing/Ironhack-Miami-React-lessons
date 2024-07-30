import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BlogProviderWrapper } from "./context/blog.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <BlogProviderWrapper>
      <App />
    </BlogProviderWrapper>
  </BrowserRouter>
  // </React.StrictMode>,
);
