import React from "react";
import "./componentImage.scss";
import logoImage from "./images/logo1.png";

export const ImageComponent: React.FC = () => {
  return (
    <div className="image-container">
      <img className="image" src={logoImage} alt="Logo de Lemoncode" />
      <p className="text">Hola Mundo</p>
    </div>
  );
};
