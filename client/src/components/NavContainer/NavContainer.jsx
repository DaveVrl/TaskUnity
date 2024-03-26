import { Container , Nav , Navbar } from 'react-bootstrap';
import NavDropdownBoards from './NavDropdownBoards';
import NavDropdownProfile from './NavDropdownProfile';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const NavContainer = () => {

  
  const navigate = useNavigate();
  const [expanded , setExpanded] = useState(false);

  const handleCloseMenu = () => {
    setExpanded(false);
  };

  const isLogin = useSelector(state => state.isLogin);


    return (
        <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary" 
        expanded={expanded}>
          <Container>
            { 
            isLogin 
            ? <Navbar.Brand onClick={()=>{navigate("/homepage") ; handleCloseMenu()}}>TaskUnity</Navbar.Brand>
            : <Navbar.Brand onClick={()=>{navigate("/") ; handleCloseMenu()}}>TaskUnity</Navbar.Brand>
            }
            <Navbar.Toggle aria-controls="navbarScroll" 
            onClick={()=>setExpanded(!expanded)} />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-0 my-lg-0"
            style={{ maxHeight: '200px' }} navbarScroll>
              { 
              isLogin
              ? <NavDropdownBoards/> 
              : null 
              }
              </Nav>
              <Nav>
                { 
                isLogin 
                ? <NavDropdownProfile/> 
                : <Nav.Link onClick={()=>{navigate("/login")}}>Login</Nav.Link> 
                }
                <Nav.Link onClick={()=>{navigate("/about") ; handleCloseMenu()}}>About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default NavContainer;