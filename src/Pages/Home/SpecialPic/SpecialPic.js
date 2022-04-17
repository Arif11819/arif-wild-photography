import React from 'react';

const SpecialPic = ({ specialPic }) => {
    const { img } = specialPic;
    return (
        <div>
            <img className='w-100' src={img} alt="" />
            <button className='mt-2'>Buy This Picture</button>
        </div>
    );
};

export default SpecialPic;