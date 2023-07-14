import React from "react";
import Chart from "../../chart/Charts/Chart1/Chart1";
import "./Card4.css";
import { FaArrowTrendUp } from "react-icons/fa6";
const Card4 = () => {
  return (
    <div className="card">
      <p className="cartHeading">Avg. Days Taken</p>
      <div className="innerCard">
        <div className="numbersDiv">
          <h2>6</h2>
          <p>
            <span className="percentage">
              <p className="icon">
                <FaArrowTrendUp />
              </p>

              <p> 20%</p>
            </span>
            <span className="number">3</span>
          </p>
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default Card4;
