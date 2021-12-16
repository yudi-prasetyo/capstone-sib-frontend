import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";

const UserHeader = () => {
    return (
        <Navbar bg="info" expand="lg" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">Solutivo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/login" className="bg-light text-dark px-3 mx-3 rounded text-center">login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default UserHeader;
