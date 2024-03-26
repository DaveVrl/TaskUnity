import { useEffect } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector , useDispatch } from 'react-redux';
import { getUserWorkspaces  } from '../../redux/actions';


const NavDropdownBoards = () => {

    const dispatch = useDispatch();
    
    // Traigo id de usuario de estado inicial
    const id = useSelector( state => state.userId);
    
    // Cargar el estado inicial con los workspaces del usuario
    useEffect(() => {
        dispatch(getUserWorkspaces(id))
    }, [dispatch, id]);

    const workspaces = useSelector( state => state.userWorkspaces);

    return (
        <NavDropdown title="Workspace" id="navbarScrollingDropdown">
            {workspaces.length > 0 ? (
                workspaces.map((workspace, index) => (
                    <div key={workspace.id}>
                        <NavDropdown.Item href={`#workspace/${workspace.id}`}>
                            {workspace.name}
                        </NavDropdown.Item>
                        {/* Renderizar el divisor debajo de cada elemento, excepto el último */}
                        {index !== workspaces.length - 1 && <NavDropdown.Divider />}
                    </div>
                ))
            ) : (
                <NavDropdown.Item href="#empty-workspaces">No tienes workspace</NavDropdown.Item>
            )}
        </NavDropdown>
    );
};

export default NavDropdownBoards;