import NavDropdown from "react-bootstrap/NavDropdown";

const NavDropdownProfile = () => {
    
  return (
    <NavDropdown title="Profile" id="collapsible-nav-dropdown">
      <NavDropdown.Item href="">Mi cuenta</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="">Cerrar Sesión</NavDropdown.Item>
    </NavDropdown>
  );
};

export default NavDropdownProfile;
