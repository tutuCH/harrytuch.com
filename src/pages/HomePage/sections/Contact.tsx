import "../../HomePage/index.scss";
import { Button, Container, Row } from "react-bootstrap";
import { contactMessage } from '../../../assets/data/data';
const Contact = () => {
  return (
    <div id="Contact" className="contact-section__container">
      <Container>
        <Row>
          <div className="contact-section-header">Get in Touch!</div>
        </Row>
        <Container>
          <div className="contact-section-content__container">
            <Row>{contactMessage}</Row>
            <Row className="justify-content-center contact-button__container">
              <Button
                className="contact-button"
                variant="light"
                onClick={() => {
                  const win: Window = window;
                  return (win.location = "mailto:tuchenhsien@gmail.com");
                }}
              >
                Say Hello
              </Button>
            </Row>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Contact;
