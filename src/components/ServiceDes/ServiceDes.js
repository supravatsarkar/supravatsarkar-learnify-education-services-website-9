import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceDes = props => {
    const { name, price, img, duration, rating } = props.service;
    return (
        <div className="col">
            <div className="card h-100 shadow rounded-3">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-success">{name}</h5>
                    <p className="card-text">Welcome! Are you completely new to programming? If not then we presume you will be looking for information about why and how to get started with Python. </p>

                </div>
                <div className="card-footer bg-white border-0 d-flex justify-content-between">
                    <h6 className="bg-secondary rounded-pill d-inline-block p-2 text-white">Duration: {duration}h</h6>
                    <h6 className="bg-warning rounded-pill d-inline-block p-2 text-white">Rating: {rating}</h6>
                </div>

                <div className="card-footer d-flex justify-content-between">
                    <h3 className="fs-4 text bolder text-success">Price: ${price}</h3>
                    <button type="button" className="btn btn-success">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDes;