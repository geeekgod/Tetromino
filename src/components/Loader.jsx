import React from "react";
import "../styles/Loader.css";
import starsImg from "../img/stars.png";

const Loader = () => {
  return (
    <div
      style={{
        background: "linear-gradient(#2b1055, #7597de)",
        background: `url(${starsImg}), linear-gradient(#2b1055, #7597de)`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="tetrominos">
        <div className="tetromino box1"></div>
        <div className="tetromino box2"></div>
        <div className="tetromino box3"></div>
        <div className="tetromino box4"></div>
      </div>
    </div>
  );
};

export default Loader;
