import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    

    const formSubmitHandler = event => {
        // setError(event.target.value);
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
        


    }
    const emailBlurHandler = event => {
        setEmail(event.target.value);
    }
    const passwordBlurHandler = event => {
        setPassword(event.target.value);
    }
    const googleSignInHandler = () => {
        

    }

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true })
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-center pt-5'>
                <div className='form-container py-5 px-4 my-3 border'>
                    <h4 className='text-center'>Log In</h4>

                    <div>
                        <Form onSubmit={formSubmitHandler}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={emailBlurHandler} type="email" placeholder="Enter email" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={passwordBlurHandler} type="password" placeholder="Password" required />
                            </Form.Group>
                            {
                                error?.message && <p className='text-danger'>{error.message}</p>
                            }

                            <input className='btn form-control form-button-style' type="submit" value="Sign In" />

                            <p className='text-center mt-2'>New to Ema-john? <Link to='/signup' className='text-warning'>Create New Account</Link> </p>


                            <div className='text-center mt-3'>
                                <p className='or-text-before-after-style'>or</p>
                            </div>
                            <div className='mt-3'>
                                <button onClick={googleSignInHandler} className='form-control btn border'>
                                    <FontAwesomeIcon className='me-2' icon={faArrowRightLong}></FontAwesomeIcon>
                                    <span>Continue with Google</span>
                                </button>

                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;