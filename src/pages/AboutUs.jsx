import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import rishabhImg from "../img/rishabh_img.jpeg";
import shreyaImg from "../img/shreya_img.jpeg";
import aditiImg from "../img/aditi_img.jpeg";

const AboutUs = () => {
  const [toggleClick, setToggleClick] = useState(false);
  useEffect(() => {
    setToggleClick(false);
  }, []);

  const toggleMenuClick = () => {
    setToggleClick(!toggleClick);
  };
  return (
    <div>
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
            <Link to="/about-us">ABOUT US</Link>
          </li>
        </ul>
      </header>
      <div class="top-container">
        <div class="container">
          <h1 class="headin">
            <span> ABOUT US </span>
          </h1>
          <div class="main-card">
            <div class="cards">
              <div class="card">
                <div class="content">
                  <div class="img">
                    <img src={rishabhImg} alt="" draggable={false} />
                  </div>
                  <div class="details">
                    <div class="name">Rishabhkumar Singh</div>
                    <div class="job">Full-Stack Developer</div>
                  </div>
                  <div class="media-icons">
                    <a
                      href="https://www.linkedin.com/in/rishabhh-singh/"
                      target="_blank"
                    >
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://github.com/thisisrishabh22"
                      target="_blank"
                    >
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="content">
                  <div class="img">
                    <img src={shreyaImg} alt="" draggable={false} />
                  </div>
                  <div class="details">
                    <div class="name">Shreya Shet</div>
                    <div class="job">Front-End Developer</div>
                  </div>
                  <div class="media-icons">
                    <a
                      href="https://www.linkedin.com/in/shreyaa-shet/"
                      target="_blank"
                    >
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/shreyaaashet" target="_blank">
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="content">
                  <div class="img">
                    <img src={aditiImg} alt="" draggable={false} />
                  </div>
                  <div class="details">
                    <div class="name">Aditi Thakre</div>
                    <div class="job">Back-End Developer</div>
                  </div>
                  <div class="media-icons">
                    <a
                      href="https://www.linkedin.com/in/aditi-thakre-3554a0221/"
                      target="_blank"
                    >
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/AditiThakre05" target="_blank">
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="cards"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutUs);
