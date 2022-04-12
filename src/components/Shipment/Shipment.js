import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('')
    const email = user?.email
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const onInputBlurHandler = event => {
        
        if (event.target.name === "name") {
            setName(event.target.value)
        }
        if (event.target.name === "phone") {
            setPhone(event.target.value)
        }
        if (event.target.name === "address") {
            setAddress(event.target.value)
        }
    }
    const onSubmitHandler = (event) => {
        console.log(name,email,phone,address)
        event.preventDefault()

        

    }



    return (
        <div className='container'>
            <div className='d-flex justify-content-center pt-5'>
                <div className='form-container py-5 px-4 my-3 border'>
                    <h4 className='text-center'>Shipping Info</h4>

                    <div>
                        <Form onSubmit={onSubmitHandler}>
                            <Form.Group className="mb-3" controlId="formBasicPassword1">
                                <Form.Label>Your Full name</Form.Label>
                                <Form.Control onBlur={onInputBlurHandler} name="name" type="text" placeholder="Your Name" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control value={user?.email} readOnly type="email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword1">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control onBlur={onInputBlurHandler} type="tel" name="phone" placeholder="Enter Phone Number" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control onBlur={onInputBlurHandler} type="text" name='address' placeholder="Write full address" required />
                            </Form.Group>




                            <input className='btn form-control form-button-style' type="submit" value="Add Shipment" />

                        </Form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shipment;