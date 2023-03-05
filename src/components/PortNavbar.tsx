import { Container, Nav, Navbar } from "react-bootstrap";
const PortNavbar = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.getElementById(targetId!.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  // function PortNavbar() {
  const sections: Array<string> = [
    "About-me",
    "Skills",
    "Experiences",
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortNavbar;
