import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container container w-50'>
            <div className='blog'>
                <h2 className='blog-title'>Q1. Difference between authorization and authentication?</h2>
                <p className='question-answer'> Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board.</p>
            </div>
            <div className='blog'>
                <h2 className='blog-title'>Q2. Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='question-answer'>We are using firebase because of this kind of reason:
                    1.Analytics 2.Remote Config 3.Database 4.Authentication.
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </p>

            </div>
            <div className='blog'>
                <h2 className='blog-title'> Q3.What other services does firebase provide other than authentication?</h2>
                <p className='question-answer'>There are many services which firebase provides other than authentication : 1.Cloud Firestore. 2.Cloud Functions. 3.Hosting. 4.Cloud Storage. 5.Google Analytics. 6.Predictions. 7.Cloud Messaging. 8.Dynamic Links 9.Remote Config</p>
            </div>
        </div>
    );
};

export default Blogs;