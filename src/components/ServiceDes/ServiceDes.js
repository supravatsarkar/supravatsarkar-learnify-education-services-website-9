import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceDes = props => {
    const { name, price, img } = props.service;
    return (
        <div class="col">
            <div class="card h-100 shadow rounded-3">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Welcome! Are you completely new to programming? If not then we presume you will be looking for information about why and how to get started with Python. </p>
                </div>
                <div class="card-footer d-flex justify-content-between">
                    <h3 class="fs-4 text bolder">Price: ${price}</h3>
                    <button type="button" class="btn btn-danger">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDes;