import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className='container'>
            <div className='d-flex justify-content-center pt-5'>
                <div className='form-container py-5 px-4 my-3 border'>
                    <h4 className='text-center'>Log In</h4>

                    <div>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"  required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"  required />
                            </Form.Group>

                            <input className='btn form-control form-button-style' type="submit" value="Sign In" />

                            <p className='text-center mt-2'>New to Ema-john? <Link to='/signup' className='text-warning'>Create New Account</Link> </p>


                            <div className='text-center mt-3'>
                                <p className='or-text-before-after-style'>or</p>
                            </div>
                            <div className='mt-3'>
                                <button className='form-control btn border'>
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