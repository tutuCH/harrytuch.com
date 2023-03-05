import "../../HomePage/index.scss"
import profilePic from '../../../assets/images/profilePic.jpeg';
import { Col, Container, Row } from "react-bootstrap";
const PersonalDetails = () => {
  const randomContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales odio nisi, at fringilla lectus interdum ac. Etiam non justo sit amet lectus porttitor aliquet. Morbi vel vehicula tellus. Etiam sit amet diam id nisl malesuada malesuada.";
  return (
    <div id="About-me" className="section__container">
      <div className="section-header-left">About me</div>
      <div className="section-content-left">
        <Container>
          <Row>
            <Col sm={8}>
              <Row>{randomContent}</Row>
              <Row>
                <div className="featured-experiences-content__container">
                  <div className="education-content-element">
                    {" "}
                    Computer Science CUHK-2021{" "}
                  </div>
                  <div className="certificate-content-element"> AWS - SAA </div>
                </div>                  
              </Row>
            </Col>
            <Col sm={4}><img className="profile-element" src={profilePic} alt="Profile" /></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PersonalDetails;