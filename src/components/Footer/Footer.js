import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="bg-dark" >
            <p className="text-muted text-center py-3 m-0">Learnify &copy; Copyright All Right Reserve 2021</p>
            <p className="text-muted text-center m-0"><small>Created by Supravat Sarkar</small></p>
        </Container>
    );
};

export default Footer;