import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useServices from '../../Hooks/useServices';

const SingleService = () => {
    const { serviceId } = useParams();
    const [services] = useServices();

    console.log(services);
    return (
        <Container style={{ minHeight: '80vh' }}>
            <h2>Service details</h2>
        </Container>
    );
};

export default SingleService;