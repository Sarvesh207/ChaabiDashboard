import React from "react";
import { BsArrowUpShort } from "react-icons/bs";
import "./Card1.css";
import { BsCircle } from "react-icons/bs";

const Card1 = () => {
  return (
    <div className="card1">
      <p className="card1_heading">Monthly Training Activity</p>
      <div className="card1_heading2">
        <BsArrowUpShort className="icon-up" />
        <p>16% more enrollees this month</p>
      </div>

      <ul className="card1_list">
        <li>
          <div>
      
            <BsCircle className="icon_circle" /> <h2>course a</h2>
          </div>

          <p>23 Workers Took This Course This Week</p>
        </li>
        <li>
          <div>
         
            <BsCircle className="icon_circle" /> <h2>course b</h2>
          </div>

          <p>253 Workers Took This Course This Week</p>
        </li>
        <li>
          <div>
          
            <BsCircle className="icon_circle"/> <h2>course c</h2>
          </div>

          <p>253 Workers Took This Course This Week</p>
        </li>
        <li>
          <div>
         
            <BsCircle className="icon_circle" />
            <h2>course d</h2>
          </div>

          <p>253 Workers Took This Course This Week</p>
        </li>
      </ul>
    </div>
  );
};

export default Card1;
