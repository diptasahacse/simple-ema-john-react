import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errormessage, setErrormessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    const emailBlurHandler = event => {
        setEmail(event.target.value);
    }
    const passwordBlurHandler = event => {
        setPassword(event.target.value);
    }
    const confirmPasswordBlurHandler = event => {
        setConfirmPassword(event.target.value);
    }
    const errorHandler = event => {
        // setError(event.target.value);
    }

    const formSubmitHandler = event => {
        // setError(event.target.value);
        event.preventDefault();
        if (password !== confirmPassword) {
            setErrormessage('Password is not match');
            setSuccessMessage("")
            return;

        }
        else if (password.length < 6) {
            setErrormessage('Password should have 6 character ');
            setSuccessMessage("")
            return;

        }
        else{
            createUserWithEmailAndPassword(email, password)

        }
        
    }
    if (user) {
        navigate('/shop')

    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-center pt-5'>
                <div className='form-container py-5 px-4 my-3 border'>
                    <h4 className='text-center'>Sign Up</h4>

                    <div>
                        <Form onSubmit={formSubmitHandler}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={emailBlurHandler} type="email" placeholder="Enter email" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={passwordBlurHandler} type="password" placeholder="Password" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword2">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control onBlur={confirmPasswordBlurHandler} type="password" placeholder="Confirm Password" required />
                            </Form.Group>
                            {
                                error?.message && <p className='text-danger'>{error.message}</p>
                            }

                            {
                                errormessage && <p className='text-danger'>{errormessage}</p>
                            }
                            {
                                successMessage && <p className='text-primary'>{successMessage}</p>
                            }
                            {
                                loading && <Spinner animation="border" variant="primary" />
                            }

                            <input className='btn form-control form-button-style' type="submit" value="Sign In" />

                            <p className='text-center mt-2'>Already have an account?  <Link to='/login' className='text-warning'>Login</Link> </p>



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

export default Signup;