import React from "react";
import Chart from "../../chart/Charts/Chart1/Chart1";
import "./Card3.css";
import { FaArrowTrendUp } from "react-icons/fa6";
const Card3 = () => {
  return (
    <div className="card">
      <p className="cartHeading">% Workers Passing Quiz</p>
      <div className="innerCard">
        <div className="numbersDiv">
          <h2>95%</h2>
          <p>
            <span className="percentage">
              <p className="icon">
                <FaArrowTrendUp />
              </p>

              <p> 20%</p>
            </span>
            <span className="number">24%</span>
          </p>
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default Card3;
