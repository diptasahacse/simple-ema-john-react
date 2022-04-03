import React from 'react';
import { Link } from 'react-router-dom';
import CartSummery from '../CartSummery/CartSummery';

const OrderSummery = ({ cart }) => {
    return (
        <div>
            <CartSummery cartProduct={cart}>
                <Link to={'/inventory'}>
                    <button className='btn btn-info form-control text-light'>Place Order</button>
                </Link>
            </CartSummery>
        </div>
    );
};

export default OrderSummery;