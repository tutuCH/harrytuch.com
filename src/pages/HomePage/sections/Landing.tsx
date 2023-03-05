// import { SetStateAction, useState } from "react";
// import { v4 } from "uuid";
import { landingInfo } from "../../../assets/data/data";
import "../../HomePage/index.scss";
const Landing = () => {
  const bubbleDiv = Array.from({ length: 50 }, (_, i) => (
    <div className="bubble" key={i}></div>
  ));
  return (
    <div id="Landing" className="landing-container">
      <div className="background-container">
        <div className="info-container centre">
          <div className="info-supp-element">
            <div className="typing">{landingInfo.subtitle}</div>
          </div>
          <div className="info-main-element">{landingInfo.title}</div>
        </div>
      </div>
      <div>{bubbleDiv}</div>
    </div>
  );
};

export default Landing;
