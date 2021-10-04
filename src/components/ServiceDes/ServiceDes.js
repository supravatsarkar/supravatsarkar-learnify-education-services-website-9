import React from 'react';

const ServiceDes = props => {
    const { name, price, img } = props.service;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <h3>Pirce ${price}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDes;