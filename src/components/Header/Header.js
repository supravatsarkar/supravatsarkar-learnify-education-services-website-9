import React from 'react';
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "white"
    }
    const navLink = { textDecoration: 'none', color: 'inherit' }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><h2>Learnify</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ms-3">
                        <Nav.Link><NavLink to="/home" activeStyle={activeStyle} style={navLink}>Home</NavLink></Nav.Link>
                        <Nav.Link ><NavLink to="/services" activeStyle={activeStyle} style={navLink}>Services</NavLink></Nav.Link>
                        <Nav.Link ><NavLink to="/about" activeStyle={activeStyle} style={navLink}>About</NavLink></Nav.Link>
                        <Nav.Link ><NavLink to="/blog" activeStyle={activeStyle} style={navLink}>Blog</NavLink></Nav.Link>

                    </Nav>
                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;