import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavDropdownBoards from './NavDropdownBoards';
import NavDropdownProfile from './NavDropdownProfile';

const NavContainer = () => {
  
  const condicional = true;

    return (
        <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">TaskUnity</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-0 my-lg-0"
            style={{ maxHeight: '200px' }} navbarScroll>
              { condicional ? null : <NavDropdownBoards/>}
              </Nav>
              <Nav>
                { condicional ? <Nav.Link href="">Login</Nav.Link> : <NavDropdownProfile/> }
                <Nav.Link href="">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default NavContainer;