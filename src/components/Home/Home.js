import React, { useEffect, useState } from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import img from '../../images/Person.png'
import ServiceHome from '../ServiceHome/ServiceHome';

const Home = () => {
    const [services] = useServices();
    const homeSectionService = services.filter((serv, indx) => indx <= 3);

    return (
        <Container style={{ minHeight: '80vh' }} >
            <div className="bg-success rounded-3 p-5 my-3 text-white">
                <h2>Learn Adobe CC with our Masterclass</h2>
                <p>
                    In this Adobe CC Masterclass, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Register now.
                </p>
                <button type="button" className="btn btn-outline-light">Register Now</button>
            </div>
            <Row className="my-3 ">
                <Col xs={12} md={5}>
                    <div className="bg-dark p-5 rounded-3">
                        <img className="w-50" src={img} alt="" />
                        <p className="fs-3 text-white">
                            I love to learn new things and skilify has help me a lot to learn more new things and new courses.
                        </p>
                        <p className="text-muted">Sruti Jahan</p>
                    </div>
                </Col>

                <Col xs={12} md={7} className="shadow p-2">
                    <div className="d-flex justify-content-between">
                        <h4 className="text-success">Top Services 2021</h4>
                        <Link to="/services">
                            <button type="button" class="btn btn-success">View All</button>
                        </Link>
                    </div>
                    <CardGroup className="my-2">
                        <Row xs={1} md={1} className="g-4">
                            {homeSectionService.map((service, idx) => <ServiceHome
                                key={idx}
                                service={service}
                            ></ServiceHome>)}
                        </Row>
                    </CardGroup>
                </Col>

            </Row>
        </Container>
    );
};

export default Home;