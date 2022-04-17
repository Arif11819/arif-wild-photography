import React from 'react';
import error from '../../../images/error.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center mt-5'>The Page Is Not Found</h2>
            <img className='w-100 mt-5' height='500' src={error} alt="" />
        </div>
    );
};

export default NotFound;