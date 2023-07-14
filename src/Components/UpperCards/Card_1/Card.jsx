import React from "react";
import Chart1 from "../../chart/Charts/Chart1/Chart1";
import "./Card1.css";
import { FaArrowTrendUp } from "react-icons/fa6";
const Card = () => {
  return (
    <div className="card">
      <p className="cartHeading">In Tranining Workers</p>
      <div className="innerCard">
        <div className="numbersDiv">
          <h2>3,356</h2>
          <p>
            <span className="percentage">
              <p className="icon">
                <FaArrowTrendUp />
              </p>

              <p> 20%</p>
            </span>
            <span className="number">234</span>
          </p>
        </div>
        <Chart1 />
      </div>
    </div>
  );
};

export default Card;
