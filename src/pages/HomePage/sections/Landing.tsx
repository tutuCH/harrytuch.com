// import { SetStateAction, useState } from "react";
// import { v4 } from "uuid";
import { landingInfo } from "../../../assets/data/data";
import "../../HomePage/index.scss";
import { Container, Row } from "react-bootstrap";
const Landing = () => {
  const bubbleDiv = Array.from({ length: 50 }, (_, i) => (
    <div className="bubble" key={i}></div>
  ));
  return (
    <div id="Landing" className="landing-container">
      <div className="background-container">
        <div className="info-container centre">
          <Container>
            <Row className="justify-content-center info-supp-element"><div className="typing">{landingInfo.subtitle}</div></Row>
            <Row className="justify-content-center info-main-element">{landingInfo.title}</Row>
          </Container>
        </div>
      </div>
      <div>{bubbleDiv}</div>
    </div>
  );
};

export default Landing;
