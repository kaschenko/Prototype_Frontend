import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavDropdown, Form, FormControl, Button, Nav ,Container} from 'react-bootstrap'
import {NavLink, Outlet} from "react-router-dom";
const setActive = ({isActive}) => isActive ? 'active-link' : ''
const main_Navbar = () => {
    return (
        <>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <NavLink to="/" className={setActive}>Home</NavLink>
                            <NavLink to="/registration" className={setActive}>Registration</NavLink>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <br />
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <br />
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export {main_Navbar};