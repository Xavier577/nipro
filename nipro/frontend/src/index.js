import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App.jsx";
import "./index.css";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("app")
);
