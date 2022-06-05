import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-2  py-8 w-full px-3 md:w-3/4 md:mx-auto'>
            <h1 className='text-5xl mb-10'>What We Offer</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:px-12'>
                {
                    services.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;