import React from "react";
import {Nav, Navbar, Container, NavDropdown, Button} from "react-bootstrap";
import { useHistory} from "react-router-dom";

const Header = () =>{
    let history = useHistory()

    const logoutButton = () => {
        localStorage.clear()
        history.push('/login')
    }

    return (
        <Navbar bg="info" expand="lg" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">Solutivo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto">
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title={`Welcome, ${localStorage.getItem('firstName')}`}
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="/">Beranda</NavDropdown.Item>
                            <NavDropdown.Item href="/profil">Profil</NavDropdown.Item>
                            <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <Button className="m-2" variant="primary" onClick={logoutButton}>
                                Logout
                            </Button>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
