import React from 'react';
import arif from '../../images/arif.jpg';

const About = () => {
    return (
        <div>
            <img height='400' className='w-25 mx-auto d-block mt-2 justify-content-center align-items-center' src={arif} alt="" />
            <h2 className='text-center fw-bold text-primary mt-2'>Ariful Islam(Arif)</h2>
            <p className='text-center mt-2'>I am Ariful Islam.I am a student of HSTU, department of Electronics and Communication Engineering.Now I am also studying a web development course in Programming Hero.After finishing this course I try to get a remote job in a foreign country.Now this course is my main focus because in near future I become a good web developer,earn money and contribute my family IN SHA ALLAH .</p>
        </div>
    );
};

export default About;