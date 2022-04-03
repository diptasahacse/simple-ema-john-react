import React from 'react';
import CartSummery from '../CartSummery/CartSummery';

const OrderSummery = ({cart}) => {
    return (
        <div>
            <CartSummery cartProduct={cart}></CartSummery>
        </div>
    );
};

export default OrderSummery;