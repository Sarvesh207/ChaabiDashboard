import React from "react";
import "./Card3.css";

const Card3 = () => {
  return (
    <>
      <div className="ProgressBar">
        <p className="ProgressBarHeading">
          Last 14 Days Active Workers In Training
        </p>
        <div className="ProgressBarContainer">
          <ul className="x-axix">
            <li>160</li>
            <li>120</li>
            <li>80</li>
            <li>40</li>
            <li>0</li>
          </ul>

          <ul className="progressbar-list">
            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "20%" }}
                ></div>
              </div>
              S
            </li>

            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "25%" }}
                ></div>
              </div>
              M
            </li>

            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "30%" }}
                ></div>
              </div>
              T
            </li>

            <li>
              <div class="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "35%" }}
                ></div>
              </div>
              W
            </li>

            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "40%" }}
                ></div>
              </div>
              T
            </li>
            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "60%" }}
                ></div>
              </div>
              F
            </li>
            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "40%" }}
                ></div>
              </div>
              S
            </li>
            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "50%" }}
                ></div>
              </div>
              M
            </li>
            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "35%" }}
                ></div>
              </div>
              T
            </li>

            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "85%" }}
                ></div>
              </div>
              W
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card3;
