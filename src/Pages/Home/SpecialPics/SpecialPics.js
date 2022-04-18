import React from 'react';
import './SpecialPics.css'
import pic1 from '../../../images/pic1.jpg'
import pic2 from '../../../images/pic2.jpg'
import pic3 from '../../../images/pic3.jpg'
import pic4 from '../../../images/pic4.jpg'
import pic5 from '../../../images/pic5.jpg'
import pic6 from '../../../images/pic6.jpg'
import SpecialPic from '../SpecialPic/SpecialPic';

const specialPics = [
    { id: 1, img: pic1 },
    { id: 2, img: pic2 },
    { id: 3, img: pic3 },
    { id: 4, img: pic4 },
    { id: 5, img: pic5 },
    { id: 6, img: pic6 },
]

const SpecialPics = () => {
    return (
        <div id='specialpics' className='container'>
            <h2 className='text-center text-primary fw-bolder mt-5 pb-2'>My Special Picture Collection</h2>
            <div className='specialPics-container'>
                {
                    specialPics.map(specialPic => <SpecialPic
                        key={specialPic.id}
                        specialPic={specialPic}
                    >

                    </SpecialPic>)
                }
            </div>
        </div>
    );
};

export default SpecialPics;