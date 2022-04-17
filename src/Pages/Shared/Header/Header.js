import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../../images/logo/logo1.ico';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth);
        navigate('/login');

    }
    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="primary" variant="dark">
                <Container>
                    <img className='me-2' height='50' src={logo} alt="" />
                    <Navbar.Brand as={Link} to='/'><h2>Arif Wild Photography</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='fw-bold' id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#specialpics">SpecialPics</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            {
                                user ?
                                    <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
                                    :
                                    <Nav.Link as={Link} to='/login'>
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;