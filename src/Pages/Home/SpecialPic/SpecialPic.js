import React from 'react';
import './SpecialPic.css';

const SpecialPic = ({ specialPic }) => {
    const { img } = specialPic;
    return (
        <div className='special-pics'>
            <img className='w-100' src={img} alt="" />
            <button className='mt-2 btn btn-primary mb-2'>Buy This Picture</button>
        </div>
    );
};

export default SpecialPic;