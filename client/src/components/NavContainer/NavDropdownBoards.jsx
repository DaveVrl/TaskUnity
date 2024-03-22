import { useEffect } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector , useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { getUserWorkspaces } from '../../redux/actions';

const NavDropdownBoards = () => {

    const dispatch = useDispatch();
    const id = 1;
    const workspaces = useSelector( state => state.userWorkspaces);

    useEffect(() => {
        dispatch(getUserWorkspaces(id))
    }, [dispatch, id])
    
    console.log(workspaces)
    return (
        <NavDropdown title="Workspace" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action/3.1">Projecto1</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Projecto2</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Projecto3</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Projecto4</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.5">Projecto5</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.6">Projecto6</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.7">Projecto7</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.8">Projecto8</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.9">Projecto9</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.10">Projecto10</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.11">Projecto11</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.12">Projecto12</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.13">Projecto13</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.14">Projecto14</NavDropdown.Item>
                </NavDropdown>
    )
};

export default NavDropdownBoards;