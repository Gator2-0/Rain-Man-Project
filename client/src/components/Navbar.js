import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container,} from 'react-bootstrap';



const AppNavbar = () => {
  

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">The RainMan Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/Game'>simple game</Nav.Link>
            <Nav.Link href="#about">user-input game</Nav.Link>
            <Nav.Link as={Link} to="/Rules">Black Jack rules</Nav.Link>
            <Nav.Link as={Link} to="/AR">AR</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
