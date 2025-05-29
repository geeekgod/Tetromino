import React, { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import rishabhImg from "../img/rishabh_img.jpeg";
import shreyaImg from "../img/shreya_img.jpeg";
import aditiImg from "../img/aditi_img.jpeg";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const AboutUsWrapper = () => {
  const [scrollValue, setScrollValue] = useState();
  const [toggleClick, setToggleClick] = useState(false);
  useEffect(() => {
    setToggleClick(false);
    let value = 0;
    window.addEventListener("scroll", () => {
      value = window.scrollY;
      setScrollValue(value);
    });
  }, [scrollValue]);

  const toggleMenuClick = () => {
    setToggleClick(!toggleClick);
  };
  const location = useLocation();
  return (
    <div>
      <Navbar
        toggleClick={toggleClick}
        toggleMenuClick={toggleMenuClick}
        location={location}
      />
      <div className="top-container">
        <div className="container">
          <h1 className="headin">
            <span> ABOUT US </span>
          </h1>
          <div className="main-card">
            <div className="cards">
              <div className="card">
                <div className="content">
                  <div className="img">
                    <img
                      src={rishabhImg}
                      alt="Rishabh Singh Full-Stack developer"
                      draggable={false}
                    />
                  </div>
                  <div className="details">
                    <div className="name">Rishabhkumar Singh</div>
                    <div className="job">Full-Stack Developer</div>
                  </div>
                  <div className="media-icons">
                    <a
                      href="https://www.linkedin.com/in/rishabhh-singh/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="https://github.com/thisisrishabh22"
                      target="_blank"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="img">
                    <img
                      src={shreyaImg}
                      alt="Shreya Shet Front-End developer"
                      draggable={false}
                    />
                  </div>
                  <div className="details">
                    <div className="name">Shreya Shet</div>
                    <div className="job">Front-End Developer</div>
                  </div>
                  <div className="media-icons">
                    <a
                      href="https://www.linkedin.com/in/shreyaa-shet/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/shreyaaashet" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="content">
                  <div className="img">
                    <img
                      src={aditiImg}
                      alt="Aditi Thakre Back-End developer"
                      draggable={false}
                    />
                  </div>
                  <div className="details">
                    <div className="name">Aditi Thakre</div>
                    <div className="job">Back-End Developer</div>
                  </div>
                  <div className="media-icons">
                    <a
                      href="https://www.linkedin.com/in/aditi-thakre-3554a0221/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/AditiThakre05" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [loader, setLoader] = React.useState(false);
  useEffect(() => {
    setLoader(false);
    document.title = "About Us | Tetromino";
    setInterval(() => {
      setLoader(true);
    }, 2000);
  }, []);

  return <div>{loader ? <AboutUsWrapper /> : <Loader />}</div>;
};

export default AboutUs;
