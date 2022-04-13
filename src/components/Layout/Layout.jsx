import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {main_Navbar} from "../NavBar/navbar";
import {Container, Nav, Navbar} from "react-bootstrap";
const setActive = ({isActive}) => isActive ? 'active-link' : ''
const Layout = () => {
    return (
        <>
            <header>
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand href="/">Course</Navbar.Brand>
                        <Nav className="me-auto">
                            <NavLink to="/" className={setActive} className="me-2">Home</NavLink>
                            <NavLink to="/registration" className={setActive} className="">Registration</NavLink>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
                <Outlet />
            <footer className="text-center">Mephi</footer>
        </>
    );
};

export {Layout};