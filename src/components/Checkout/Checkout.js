import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Home/Services/Service/Service';

const Checkout = () => {
    const [services] =useServices()
    return (
        <div>
            <div className='row gy-2'>
            {
               services.map(service =><Service service={service} key={service.id}></Service>) 
            }
            </div>
        </div>
    );
};

export default Checkout;