import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <h2>Learnify</h2>
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
            </nav>
        </div>
    );
};

export default Header;