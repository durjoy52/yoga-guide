import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import Service from './Service/Service';

const Services = () => {
    const navigate = useNavigate()
    const [services] = useServices([])
    return (
        <div id='services' className='mt-5 overflow-hidden'>
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