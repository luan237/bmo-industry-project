import React from "react";
import ReactDOM from "react-dom/";
import App from "./App";
import "./styles/partials/global.scss";
window.process = {};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
