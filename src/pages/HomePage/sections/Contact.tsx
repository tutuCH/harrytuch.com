import "../../HomePage/index.scss";
import { Button, Container, Row } from "react-bootstrap";
const Contact = () => {
  const randomContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales odio nisi, at fringilla lectus interdum ac. Etiam non justo sit amet lectus porttitor aliquet. Morbi vel vehicula tellus. Etiam sit amet diam id nisl malesuada malesuada.";
  return (
    <div id="Contact" className="contact-section__container">
      <Container>
        <Row>
          <div className="contact-section-header">Get in Touch!!</div>
        </Row>
        <Container>
          <div className="contact-section-content__container">
            <Row>{randomContent}</Row>
            <Row className="justify-content-center">
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
