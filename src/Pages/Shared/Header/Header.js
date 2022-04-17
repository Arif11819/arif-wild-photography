import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo/logo1.ico';

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <img height='50' className='ms-4' src={logo} alt="" />
                <Container className='ms-4 fw-bolder'>
                    <Navbar.Brand className='me-4' href="#home">
                        <h2 className='fw-bolder'>Arif Wild Photography</h2></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#blogs">Blogs</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;