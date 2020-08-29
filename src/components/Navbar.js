import React from 'react';
import * as ReactBootStrap from 'react-bootstrap'

function Navbar(props){
    return(
        
            <ReactBootStrap.Navbar bg="dark" variant="dark" expand="lg">
                <ReactBootStrap.Navbar.Brand href="#home">{props.tittle}</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            
            
          </ReactBootStrap.Nav>
          <ReactBootStrap.Form inline>
            <ReactBootStrap.NavDropdown title="Filtros" id="basic-nav-dropdown">
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">Marca</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">Modelo</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.3">Año</ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href="#action/3.4">Todos</ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
            <ReactBootStrap.Button variant="outline-success">Buscar</ReactBootStrap.Button>
            <ReactBootStrap.Nav.Link href="#home">Ingresar</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#link">Registrarse</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Form>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>

        

    );
}

export default Navbar;