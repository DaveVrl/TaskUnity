import { Container , Nav , Navbar } from 'react-bootstrap';
import NavDropdownBoards from './NavDropdownBoards';
import NavDropdownProfile from './NavDropdownProfile';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { setIsLogin } from '../../redux/actions';

const NavContainer = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expanded , setExpanded] = useState(false);

  const handleCloseMenu = () => {
    setExpanded(false);
  };

  const userId = useSelector(state => state.userId);
  const isLogin = useSelector(state => state.isLogin);

  useEffect( () => {
    if(userId !== null) {
      dispatch(setIsLogin(false));
    }
  }, [dispatch , userId]);


    return (
        <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary" 
        expanded={expanded}>
          <Container>
            { 
            isLogin 
            ? <Navbar.Brand onClick={()=>{navigate("/") ; handleCloseMenu()}}>TaskUnity</Navbar.Brand>
            : <Navbar.Brand onClick={()=>{navigate("/homepage") ; handleCloseMenu()}}>TaskUnity</Navbar.Brand>
            }
            <Navbar.Toggle aria-controls="navbarScroll" 
            onClick={()=>setExpanded(!expanded)} />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-0 my-lg-0"
            style={{ maxHeight: '200px' }} navbarScroll>
              { 
              isLogin 
              ? null 
              : <NavDropdownBoards/>
              }
              </Nav>
              <Nav>
                { 
                isLogin 
                ? <Nav.Link onClick={()=>{navigate("/login")}}>Login</Nav.Link> 
                : <NavDropdownProfile/> 
                }
                <Nav.Link onClick={()=>{navigate("/about") ; handleCloseMenu()}}>About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
};

export default NavContainer;