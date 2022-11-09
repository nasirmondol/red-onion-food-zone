import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../Login/SocialLogin/SocialLogin';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [updateProfile, updating, updaeError] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleName = event => {
        setName(event.target.value)
    }

    const handleEmail = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
    }
    return (
        <div className=''>
            <h2 className='text-info '>Please Register</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='d-flex justify-content-start'>Your name</Form.Label>
                    <Form.Control onBlur={handleName} type="name" placeholder="Enter name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='d-flex justify-content-start'>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='d-flex justify-content-start'>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50 m-3' variant="primary" type="submit">
                    Register
                </Button>
                <p className='d-flex justify-content-start'> Already have an account?
                    <Link className='text-primary text-decoration-none ms-2' to='/login'>
                        Please Login
                    </Link>
                </p>
                <SocialLogin/>
            </Form>
           
        </div>
    );
};

export default Register;