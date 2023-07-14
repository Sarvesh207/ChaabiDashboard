/** */
import React, { useContext } from "react";
import "./Heading.css";
import Logo from "./Logo/Logo";

const Heading = () => {
  return (
    <div className="topbar">
      <Logo />
      <div className="heading">
        <h1>Hello, Punnet Dheman</h1>
        <p>Follings is Your Organization's Performance Summary</p>
      </div>
    </div>
  );
};

export default Heading;
