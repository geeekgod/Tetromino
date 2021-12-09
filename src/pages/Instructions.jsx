import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const InstructionsWrapper = memo(() => {
  return (
    <div className="top-container-instructions">
      <div className="container-instructions">
        <h1 className="headin-instructions">
          <span> INSTRUCTIONS </span>
        </h1>
        <div className="main-card-instructions">
          <div className="cards-instructions ">
            <div className="card-instructions   ">
              <div className="content-instructions">
                <ul>
                  <li>
                    Press{" "}
                    <i className="fas fa-chevron-left instruction-icons"></i>{" "}
                    key to move tetromino Left.
                  </li>
                  <li>
                    Press{" "}
                    <i className="fas fa-chevron-right instruction-icons"></i>{" "}
                    key to move tetromino Right.
                  </li>
                  <li>
                    Press{" "}
                    <i className="fas fa-chevron-down instruction-icons"></i>{" "}
                    key to move tetromino Down.
                  </li>
                  <li>
                    Press{" "}
                    <i className="fas fa-chevron-up instruction-icons"></i> key
                    to Rotate the tetromino.
                  </li>
                </ul>
                <h4>GAME TIP: Hold Down key to move tetromino fall fast.</h4>
              </div>
            </div>
          </div>
          <Link
            to="/play"
            style={{
              padding: "10px 30px",
              backdropFilter: "blur(1px) saturate(200%)",
              backgroundColor: "rgba(255, 255, 255, 0.56)",
              borderRadius: "12px",
              border: "1px solid rgba(209, 213, 219, 0.3)",
              boxShadow: "0 5px 10px rgb(255 255 255 / 56%)",
              cursor: "pointer",
              marginTop: 40,
            }}
          >
            Play Now
          </Link>
        </div>
      </div>
    </div>
  );
});

const Instructions = () => {
  const [loader, setLoader] = React.useState(false);
  useEffect(() => {
    setLoader(false);
    document.title = "Tetromino";
    setInterval(() => {
      setLoader(true);
    }, 2000);
  }, []);

  return <div>{loader ? <InstructionsWrapper /> : <Loader />}</div>;
};

export default memo(Instructions);
