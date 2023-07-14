import React from "react";
import "./ProgressBar.css";

const ProgressBarChart = () => {
  return (
    <>
      <div className="ProgressBar">
        <p className="ProgressBarHeading">
          Last 14 Days Active Workers In Training
        </p>
        <div className="ProgressBarContainer">
          <ul className="x-axix">
            <li>400</li>
            <li>300</li>
            <li>200</li>
            <li>100</li>
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
              3 june
            </li>

            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "25%" }}
                ></div>
              </div>
              4 june
            </li>

            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "30%" }}
                ></div>
              </div>
              5 june
            </li>

            <li>
              <div class="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "35%" }}
                ></div>
              </div>
              6 june
            </li>

            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "40%" }}
                ></div>
              </div>
              7 june
            </li>
            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "60%" }}
                ></div>
              </div>
              8 june
            </li>
            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "40%" }}
                ></div>
              </div>
              9 june
            </li>
            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "50%" }}
                ></div>
              </div>
              10 june
            </li>
            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "35%" }}
                ></div>
              </div>
              11 june
            </li>
            <li>
              <div class="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "75%" }}
                ></div>
              </div>
              12 june
            </li>
            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "85%" }}
                ></div>
              </div>
              13 june
            </li>
            <li>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ height: "100%" }}
                ></div>
              </div>
              14 june
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProgressBarChart;
