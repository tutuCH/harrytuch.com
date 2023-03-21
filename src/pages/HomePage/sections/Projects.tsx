import { Button, Container, Row } from "react-bootstrap";
import { FaGithub, } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import "../../HomePage/index.scss";
import projectImage from "../../../assets/images/toronto-rental-prediction.png";
import { projects } from "../../../assets/data/data";
import { ProjectsDef } from "../../../assets/data/dataDef";
const Projects = () => {
  function project() {
    return projects.map(
      (value: ProjectsDef) => (
        <Container className="section__container">
          <Card className="project-card__container">
            <Card.Img  className="projects-image-element" src={projectImage}/>
            <div className="projects-text__container">
              <Card.Title>{value.title}</Card.Title>
              <Card.Text> {value.content} </Card.Text>
              <footer className="projects-text-footer">
                <Button variant="secondary" onClick={() => window.open(value.url, '_blank', 'noreferrer')}>Check it out</Button>
                <Button variant="secondary" onClick={() => window.open(value.github, '_blank', 'noreferrer')}><FaGithub/></Button>
              </footer>
            </div>
          </Card>
          <Row><h5>More Coming Soon...</h5></Row>
        </Container>
      )
    );
  }
  return (
    <div id="Projects" className="projects__container section__container">
      <div className="section-header-right">Projects</div>
      <div className="projects-section-content-right">
        <div>{project()}</div>
      </div>      
    </div>
  );
};

export default Projects;
