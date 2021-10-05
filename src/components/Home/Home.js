import React, { useEffect, useState } from 'react';
import { CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import img from '../../images/Person.png'
import CarouselData from '../CarouselData/CarouselData';
import ServiceHome from '../ServiceHome/ServiceHome';

const Home = () => {
    const [services] = useServices();
    const homeSectionService = services.filter((serv, indx) => indx <= 3);
    const [items, setItems] = useState([]);


    return (
        <Container style={{ minHeight: '80vh' }} >

            {/* Carousel Start  */}
            <Carousel>
                <Carousel.Item>
                    <div className="bg-success rounded-3 p-5 my-3 text-white shadow">
                        <h2>Learn Adobe CC with our Masterclass</h2>
                        <p>In this Adobe CC Masterclass, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Register now.</p>
                        <button type="button" className="btn btn-outline-light">Register Now</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="bg-success rounded-3 p-5 my-3 text-white shadow">
                        <h2>Learn MERN Stack by Mark Kaka</h2>
                        <p>In this Adobe CC Masterclass, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Register now.</p>
                        <button type="button" className="btn btn-outline-light">Register Now</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="bg-success rounded-3 p-5 my-3 text-white shadow">
                        <h2>A to Z JavaScript with Special Guid</h2>
                        <p>In this Adobe CC Masterclass, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Register now.</p>
                        <button type="button" className="btn btn-outline-light">Register Now</button>
                    </div>
                </Carousel.Item>

            </Carousel>
            {/* Carousel End  */}

            <Row className="my-3" >
                <Col xs={12} md={6} style={{ backgroundColor: "#fbb8f9" }}>
                    <div className=" p-5 rounded-3">
                        <img className="w-50" src={img} alt="" />
                        <p className="fs-3 text-dark">
                            I love to learn new things and Learnify has help me a lot to learn more new things and new courses.
                        </p>
                        <p className="text-dark">Sruti Jahan</p>
                    </div>
                </Col>

                <Col xs={12} md={6} className="shadow p-2">
                    <div className="d-flex justify-content-between">
                        <h4 className="text-success">Top Services 2021</h4>
                        <Link to="/services">
                            <button type="button" className="btn btn-success">View All</button>
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
            <Row className="my-2 d-flex align-items-center">
                <Col xs={12} md={6}>
                    <img className="img-fluid" src="https://www.netacad.com/sites/default/files/istock-627013054-map-800.jpg?t=1617918434" alt="..." />
                </Col>
                <Col xs={12} md={6}>
                    <h3>Where do I take these courses?</h3>
                    <p>Networking Academy courses can be taken in person at over 10,400 learning institutions around the world. Some of our courses can be taken online, right here through netacad.com. Click "learn more" on a course above to see which options are available.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;