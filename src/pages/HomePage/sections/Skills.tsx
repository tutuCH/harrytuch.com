import { Col, Container, Row } from "react-bootstrap";
import { skills } from "../../../assets/data/data";
import { SkillsDef } from "../../../assets/data/dataDef";
import "../../HomePage/index.scss";
const Skills = () => {
  return (
    <div id="Skills" className="skills section__container">
      <div className="section-header-right">My Skills</div>
      <div className="section-content-right">
        <Container>
          <Row>
            <Row>
              {Object.keys(skills).map((key: string) => (
                <Col key={key}>
                  <div key={key}>
                    {key}:
                    <ul>
                      {skills[key as keyof SkillsDef].map(
                        (value: string, index: number) => (
                          <li key={index}>{value}</li>
                        )
                      )}
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
