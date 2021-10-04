import React, { useEffect, useState } from 'react';
import { CardGroup, Carousel, Col, Container, Row } from 'react-bootstrap';
import img from '../../images/Person.png'
import img1 from '../../images/slider-1.jpg'
import img2 from '../../images/slider-2.jpg'
import img3 from '../../images/slider-3.jpg'
import Service from '../Service/Service';

const Home = () => {
    const [services, setServices] = useState([]);
    const homeSectionService = services.filter((serv, indx) => indx <= 3);
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            });
    }, [])
    return (
        <Container style={{ minHeight: '80vh' }} >
            <div className="bg-secondary rounded-3 p-5 my-3 text-white">
                <h2>Learn Adobe CC with our Masterclass</h2>
                <p>
                    In this Adobe CC Masterclass, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Register now.
                </p>
                <button type="button" className="btn btn-primary">Register Now</button>
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

                <Col xs={12} md={7}>
                    <CardGroup>
                        <Row xs={1} md={1} className="g-4">
                            {homeSectionService.map(service => <Service service={service}></Service>)}
                        </Row>
                    </CardGroup>
                </Col>

            </Row>
        </Container>
    );
};

export default Home;