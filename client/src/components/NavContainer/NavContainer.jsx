import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavDropdownBoards from './NavDropdownBoards';


const NavContainer = () => {
    
    return (
        <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">TaskUnity</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-0 my-lg-0"
            style={{ maxHeight: '200px' }} navbarScroll>
              <NavDropdownBoards/>
              </Nav>
              <Nav>
                <NavDropdown title="Profile" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.5">Mi cuenta</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.6">Cerrar Sesión</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#deets">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default NavContainer;