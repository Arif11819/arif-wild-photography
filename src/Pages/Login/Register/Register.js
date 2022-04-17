
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (agree) {
            createUserWithEmailAndPassword(email, password);
        }


    }
    const navigateRegister = event => {
        navigate('/login');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Resister</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <input className='me-2' onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept Terms and Conditions</label>
                <Button
                    disabled={!agree}
                    variant="primary w-50 mx-auto d-block mt-2" type="submit">
                    Register
                </Button>
            </Form>
            <p className='mt-2'>Already have an Account? <span style={{ cursor: 'pointer' }}
                className='text-primary' onClick={navigateRegister} >Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;