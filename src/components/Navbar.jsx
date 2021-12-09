import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleClick, toggleMenuClick, location, scrollValue }) => {
  const headerStyle = () => {
    if (location.pathname === "/") {
      return { top: scrollValue * 0.5 + "px" };
    } else return null;
  };
  return (
    <div>
      <header id="header" style={headerStyle()}>
        <Link className="logo" to="/">
          Tetromino
        </Link>
        <div
          className={toggleClick ? "toggle active" : "toggle"}
          onClick={toggleMenuClick}
        ></div>
        <ul className={toggleClick ? "navigation active" : "navigation"}>
          <li>
            {location.pathname === "/" ? (
              <Link className="active" to="/">
                Home
              </Link>
            ) : (
              <Link to="/">Home</Link>
            )}
          </li>
          <li>
            {location.pathname === "/" ? (
              <a href="#about-game">ABOUT GAME</a>
            ) : (
              <Link to="/">ABOUT GAME</Link>
            )}
          </li>
          <li>
            {location.pathname === "/about-us" ? (
              <Link className="active" to="/about-us">
                ABOUT US
              </Link>
            ) : (
              <Link to="/about-us">ABOUT US</Link>
            )}
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
