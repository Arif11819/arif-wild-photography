import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div sticky='bottom' style={{ height: '150px' }} className='bg-primary'>
            <footer className='text-center mt-5'>
                <h3><small className='mt-6'>copyright @ {year}</small></h3>
            </footer>
        </div>

    );
};

export default Footer;