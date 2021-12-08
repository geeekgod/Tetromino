import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import starsImg from "../img/stars.png";
import moonImg from "../img/moon.png";
import mountainBehindImg from "../img/mountains_behind.png";
import mountainFrontImg from "../img/mountains_front.png";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const HomeWrapper = () => {
  const [scrollValue, setScrollValue] = useState();
  const [toggleClick, setToggleClick] = useState(false);
  useEffect(() => {
    setToggleClick(false);
    let value = 0;
    window.addEventListener("scroll", () => {
      value = window.scrollY;
      setScrollValue(value);
      console.log(scrollValue);
    });
  }, [scrollValue]);

  const toggleMenuClick = () => {
    setToggleClick(!toggleClick);
  };

  return (
    <>
      <header id="header">
        <a href="#home" className="logo">
          tetromino
        </a>
        <div
          class={toggleClick ? "toggle active" : "toggle"}
          onClick={toggleMenuClick}
        ></div>
        <ul className={toggleClick ? "navigation active" : "navigation"}>
          <li>
            <a href="#" class="active">
              HOME
            </a>
          </li>
          <li>
            <a href="#about-game">ABOUT GAME</a>
          </li>
          <li>
            <Link to="/">ABOUT US</Link>
          </li>
        </ul>
      </header>
      <section className="images">
        <img
          src={starsImg}
          alt=""
          id="stars"
          style={{ left: scrollValue * 0.25 + "px" }}
        />
        <img
          src={moonImg}
          alt=""
          id="moon"
          style={{ top: scrollValue * 1.05 + "px" }}
        />
        <img
          src={mountainBehindImg}
          alt=""
          id="mountains_behind"
          style={{ top: scrollValue * 0.5 + "px" }}
        />
        <h2
          id="text"
          style={{
            marginRight: scrollValue * 4 + "px",
            marginTop: scrollValue * 1.5 + "px",
          }}
        >
          Tetromino
        </h2>
        <Link
          to="/play"
          id="btn"
          style={{ marginTop: scrollValue * 1.5 + "px" }}
        >
          PLAY NOW
        </Link>
        <img
          src={mountainFrontImg}
          alt=""
          id="mountains_front"
          style={{ top: scrollValue * 0 + "px" }}
        />
      </section>
      <div
        id="about-game"
        style={{ display: "flex", justifyContent: "center" }}
        class="sec"
      >
        <div class="container">
          <div class="row wrapper">
            <h1 class="head">
              <span> ABOUT GAME </span>
            </h1>
            <p class="lead">
              By embracing our universal desire to create order out of chaos,
              the Tetromino game provides intellectual sport that combines
              continuous fun with mental stimulation.
            </p>
            <br />
            <p class="lead">
              The Tetromino game requires players to strategically rotate, move,
              and drop a procession of blocks that fall into the rectangular
              Matrix at increasing speeds. Players attempt to clear as many
              lines as possible by completing horizontal rows of blocks without
              empty space, but if the blocks surpass the Skyline the game is
              over! It might sound simple, but strategy and speed can go a long
              way! Are YOU up for the challenge?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  const [loader, setLoader] = React.useState(false);
  useEffect(() => {
    setLoader(false);
    document.title = "Tetromino";
    setInterval(() => {
      setLoader(true);
    }, 2000);
  }, []);

  return <div>{loader ? <HomeWrapper /> : <Loader />}</div>;
};

export default React.memo(Home);
