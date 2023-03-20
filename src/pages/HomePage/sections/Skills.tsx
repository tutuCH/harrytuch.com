import { Badge, Col, Container, Row } from "react-bootstrap";
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
            {Object.keys(skills).map((key: string) => (
              <Row key={key}>
                <div key={key}>
                  <div>{key}:</div>
                  {skills[key as keyof SkillsDef].map(
                      (value: string, index: number) => (
                        <Badge pill bg="secondary" className="skills-badge-element" key={index}>{value}</Badge>
                      )
                    )}                  
                </div>
              </Row>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Skills;
