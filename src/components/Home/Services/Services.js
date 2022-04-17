import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from './Service/Service';

const Services = () => {
    const [services] = useServices([])
    return (
        <div id='services' className='mt-3 overflow-hidden container mx-auto'>
            <h2 className='text-center'>Services</h2>
            <div   className='row gy-2 justify-items-center'>
            {
               services.map(service =><Service service={service} key={service.id}></Service>) 
            }
            </div>
        </div>
    );
};

export default Services;