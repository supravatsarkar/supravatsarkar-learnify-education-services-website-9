import React from 'react';
import { useEffect, useState } from "react";
import useServices from '../../Hooks/useServices';

const ServiceDetails = () => {
    const [services] = useServices();

    return (
        <div>
            <h2>Service Details</h2>
        </div>
    );
};

export default ServiceDetails;