import React from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container,  NavDropdown } from "react-bootstrap";


function Header(props) {
  const JSON = props.data;
  return (
      <Navbar bg="primary" expand="lg" variant="dark" fiexed="top">
        <Container>
    
        <Link className='navbar-brand' to="/">React-Bootstrap</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            {JSON.menu.map((MenuItem, i) => (
               <React.Fragment key={i}>
                {MenuItem.name &&
                 MenuItem.sub.length ? 
               (<NavDropdown key={i}
                    title={MenuItem.name}
                    id="collasible-nav-dropdown">
                    {MenuItem.sub.map((submenu, i) => (
                      <NavDropdown.Item key={i}>
                        {submenu.name}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>):( <Link to='/' className='nav-link' to={MenuItem.href}>{MenuItem.name}</Link>)}
               </React.Fragment>
                
            ))}
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
     
    
  );
}

export default Header;
