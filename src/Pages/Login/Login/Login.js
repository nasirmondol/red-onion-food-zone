import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || ('/');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        return <Loading />
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
        sendPasswordResetEmail(email)
    }
    return (
        <div>
            <h2 className='text-warning'>Please Login</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='d-flex justify-content-start'>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='d-flex justify-content-start'>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{error?.message}</p>

                <Button className='w-50 m-3 text-dark' variant="warning" type="submit">
                    Login
                </Button>
                <p className='d-flex justify-content-start'>New to genius car? <Link className='text-primary text-decoration-none ms-2' to='/register'>Please register</Link></p>
                <p className='d-flex justify-content-start'>Forgot password? <Link className='text-primary text-decoration-none ms-2'>Reset Password</Link></p>
            </Form>
        </div>
    );
};

export default Login;