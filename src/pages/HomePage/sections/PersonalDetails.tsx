import "../../HomePage/index.scss";
import { basicInfo } from "../../../assets/data/data";
import profilePic from "../../../assets/images/profilePic.jpeg";
import cuhk from "../../../assets/images/cuhk-logo.png";
import awsSaa from "../../../assets/images/aws-saa-logo.png";
import { Col, Container, Row } from "react-bootstrap";
import { linkedContent } from "../../../assets/data/dataDef";
const PersonalDetails = () => {
  const educations = basicInfo.education;
  const certificates = basicInfo.certificates;

  function featuredExperiences(exp: Array<linkedContent>, category: string) {
    return exp.map(
      (e: { content: string; link: string, src: string }, index: number) => (
        <Container
          key={index}
          className="featured-experiences-link experiences-animation-element"
          onClick={() => {
            const win: Window = window;
            return (win.location = e.link);
          }}          
        >
          <Row>
            <Col sm={10}>
              <p key={index}>{e.content}</p>
            </Col>
            {category === 'edu' && (<Col sm={2}> <img key={index} src={cuhk}  className='experience-logo' alt=""/> </Col>)}
            {category === 'cert' && (<Col sm={2}> <img key={index} src={awsSaa}  className='experience-logo' alt=""/> </Col>)}
          </Row>
        </Container>
      )
    );
  }
  return (
    <div id="About-me" className="about-me__container section__container">
      <div className="section-header-left">About me</div>
      <div className="section-content-left">
        <Container>
          <Row>
            <Col sm={8}>
              <Row>{basicInfo.content}</Row>
            </Col>
            <Col sm={4}>
              <img className="profile-element" src={profilePic} alt="Profile" />
            </Col>
          </Row>
          <Row>
            <div className="dashed-line"></div>
            <div className="featured-experiences-content__container">
              <div className="education-content-element">
                <h5>Education</h5>
                <img key={0} src="../../../assets/images/cuhk-logo.png" style={{ width: "100%" }} alt=""/>
                <div>{featuredExperiences(educations, 'edu')}</div>
              </div>
              <div className="certificate-content-element">
                <h5>Certificates</h5>
                <div>{featuredExperiences(certificates, 'cert')}</div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PersonalDetails;
