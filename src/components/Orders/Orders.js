import React, { Component } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import OrderSummery from '../OrderSummery/OrderSummery';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;

    }
    return (
        <div className='container'>
            <div className='row g-4'>
                <div className='col-12 col-md-8'>
                    <div>
                        <h3>Orders : {quantity}</h3>

                        <div>
                            <ReviewItem cart={cart}></ReviewItem>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div>
                        <OrderSummery cart={cart}></OrderSummery>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Orders;