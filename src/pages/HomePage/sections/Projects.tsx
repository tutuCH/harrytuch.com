import { Button, Container, Row } from "react-bootstrap";
import { FaGithub, } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import "../../HomePage/index.scss";
import torontoRentalPrediction from "../../../assets/images/toronto-rental-prediction.png";
import oneHubReportMamager from "../../../assets/images/oneHub-report-mamager.png";
import { projects } from "../../../assets/data/data";
import { ProjectsDef } from "../../../assets/data/dataDef";
const Projects = () => {
  const getSrcPath = (title: string) => {
    switch(title){
      case "Rental Price Prediction":
        return torontoRentalPrediction;
      case "OneHub Business Consulting Report Manager":
        return oneHubReportMamager
      default:
        return ''
    }
  }
  function project() {
    return projects.map(
      (value: ProjectsDef, index) => (
        <Container key={index} className="section__container">
          <Card className="project-card__container">
            <Card.Img  className="projects-image-element" src={getSrcPath(value.title)}/>
            <div className="projects-text__container">
              <Card.Title>{value.title}</Card.Title>
              <Card.Text> {value.content} </Card.Text>
              <footer className="projects-text-footer">
                {value.url && <Button variant="secondary" onClick={() => window.open(value.url, '_blank', 'noreferrer')}>Check it out</Button>}
                {value.github && <Button variant="secondary" onClick={() => window.open(value.github, '_blank', 'noreferrer')}><FaGithub/></Button>}
              </footer>
            </div>
          </Card>
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
      <Row><h5>More Coming Soon...</h5></Row>  
    </div>
  );
};

export default Projects;
