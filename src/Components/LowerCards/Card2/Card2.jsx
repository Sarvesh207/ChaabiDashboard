import React from "react";
import "./Card2.css";
import { GoDotFill } from "react-icons/go";

const Card2 = () => {
  const totalAngle = 360;
  const greenAngle = 2; // Angle for the green portion
  const redAngle = 125; // Angle for the red portion
  return (
    <div className="card3Container">
      <p className="card3Heading">Quiz Passing %</p>
      <div className="card3">
        <div className="pie-chart">
          <div className="slice red"></div>
          <div className="slice green"></div>
          <div className="inner-circle"></div>
        </div>
        <div >
          <div className="workers">
            <GoDotFill className="greenDot" />
            <div>
              <h3>passed</h3>
              <p>1423 workers</p>
            </div>
          </div>
          <div className="workers">
            <GoDotFill className="redDot"/>
            <div>
              <h3>failed</h3>
              <p>134 workers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
