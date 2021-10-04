import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = props => {
    const { name, img, price } = props.service;
    return (
        <div>
            <Col>
                <div className="card h-100 mb-3 " >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <p className="card-text fw-bolder">Price: ${price}</p>
                                <p className="card-text"><small className="text-muted">Duration: </small></p>

                            </div>
                        </div>
                    </div>
                </div>
            </Col >
        </div >
    );
};

export default Service;