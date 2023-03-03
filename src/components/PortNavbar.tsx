import { Container, Nav, Navbar, } from 'react-bootstrap';
import './PortNavbar.scss';
function PortNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='justify-content-center'>
      <Container>
        <Navbar.Brand href="#home">Hi there</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#experiences">Experiences</Nav.Link>
            <Nav.Link href="#projecs">Projecs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortNavbar;