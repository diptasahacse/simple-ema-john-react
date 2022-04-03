import React, { Component } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDataBase, removeFromLocalStorage } from '../../utilities/ManageDB';
import OrderSummery from '../OrderSummery/OrderSummery';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;

    }
    const removeItemHandler = (product)=>{
        
        const rest = cart.filter(pr=> pr.id !== product.id);
        setCart(rest);
        removeFromLocalStorage(product.id)
        // addToDataBase(product);
        
    }
    return (
        <div className='container'>
            <div className='row g-4'>
                <div className='col-12 col-md-8'>
                    <div>
                        <h3>Orders : {quantity}</h3>

                        <div>
                            <ReviewItem removeItemHandler={removeItemHandler} cart={cart}></ReviewItem>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <div>
                        <OrderSummery removeItemHandler={removeItemHandler} cart={cart}>
                            
                        </OrderSummery>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Orders;