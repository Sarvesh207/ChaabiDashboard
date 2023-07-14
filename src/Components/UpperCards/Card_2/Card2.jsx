import React from "react";
import Chart2 from "../../chart/Charts/Chart2/Chart2";
import "./Card2.css";
import { FaArrowTrendUp } from "react-icons/fa6";
const Card2 = () => {
  return (
    <div className="card">
      <p className="cartHeading">Video Watch-Time (Hrs)</p>
      <div className="innerCard">
        <div className="numbersDiv">
          <h2>2,433</h2>
          <p>
            <span className="percentage">
              <p className="icon-red">
                <FaArrowTrendUp />
              </p>

              <p className="percentage-red"> 20%</p>
            </span>
            <span className="number">435</span>
          </p>
        </div>
        <Chart2 />
      </div>
    </div>
  );
};

export default Card2;
