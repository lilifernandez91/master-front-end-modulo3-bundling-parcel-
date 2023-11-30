import React from "react";
import ReactDOM from "react-dom";
import { ImageComponent } from "./componentImage.js";
import "./componentImage.scss";

ReactDOM.render(
  <div className="container">
    <h1>Laboratorio de Parcel</h1>
    <ImageComponent />
  </div>,
  document.getElementById("root")
);
