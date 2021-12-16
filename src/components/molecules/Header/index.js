import React from "react";
import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";

const Header = () =>{
    return (
        <Navbar bg="info" expand="lg" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">Solutivo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto">
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title="Welcome, User"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="/">Beranda</NavDropdown.Item>
                            <NavDropdown.Item href="/profil">Profil</NavDropdown.Item>
                            <NavDropdown.Item href="/about">About US</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
