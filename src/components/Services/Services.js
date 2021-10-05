import React from 'react';
import { Container } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import ServiceDes from '../ServiceDes/ServiceDes'

const Services = () => {
    const [services] = useServices();
    return (
        <Container style={{ minHeight: '80vh' }}>
            <h2 className="text-center bg-light text-success p-2 my-2 rounded-2 shadow">Our All Services</h2>
            <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 g-4 my-3">
                {services.map((service, ind) => <ServiceDes
                    key={ind}
                    service={service}
                ></ServiceDes>)}
            </div>
        </Container >
    );
};

export default Services;