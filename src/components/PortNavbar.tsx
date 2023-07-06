import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const PortNavbar = () => {
  const redirectLinks = {
    github: "https://github.com/tutuCH",
    linkedin: "https://www.linkedin.com/in/harry-tu-6a0080175/",
    resume: "https://docs.google.com/document/d/1Utb_42CuBPRIuevaeg7jNhEMi0bcg1L9/edit?usp=sharing&ouid=102401064847005049634&rtpof=true&sd=true",
  }
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.getElementById(targetId!.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest",});
    }
  };

  const handleRedirect = (destination: 'github' | 'linkedin' | 'resume') => {
    window.open(redirectLinks[destination], '_blank', 'noreferrer');
  }
  // function PortNavbar() {
  const sections: Array<string> = [
    "About-me",
    "Skills",
    "Experiences",
    "Projects",
    "Contact",
  ];
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="justify-content-center"
    >
      <Container>
        <Navbar.Brand href="#Landing" onClick={handleClick}>{`<Hi there/>`}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {sections.map((section: string, index: number) => (
              <Nav.Link key={index} href={`#${section}`} onClick={handleClick}>
                {section}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link onClick={() => handleRedirect('github')}><FaGithub/></Nav.Link>
            <Nav.Link onClick={() => handleRedirect('linkedin')}><FaLinkedinIn/></Nav.Link>
            <Nav.Link onClick={() => handleRedirect('resume')}><Button variant="outline-light">Resume</Button></Nav.Link>
          </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortNavbar;
