import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2 className='text-primary fw-bolder'>{name}</h2>
            <p className='fw-bolder'>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Get Picture: {name}</button>
        </div>
    );
};

export default Service;