import React from 'react';
import './CartSummery.css'
const CartSummery = ({cartProduct}) => {
    const totalPrice = cartProduct.reduce((pre,current)=>pre+current.price,0);
    const shippingCharge = 5;
    const tax = 114;
    return (
        <div>
            <h3 className='text-center my-3'>Cart Summery</h3>
            <div className='cart-items  m-2'>

            </div>
            <div className="cart-info-box mt-4 p-4">
                <div className='d-flex align-items-center justify-content-between mb-4'>
                    <h6 className='my-1 '>Selected Items: </h6>
                    <span>{cartProduct.length}</span>
                </div>
                
                <div className='d-flex align-items-center justify-content-between'>
                    <h6 className='my-1 '>Total Price: </h6>
                    <span>${totalPrice}</span>
                </div>
                <hr className='my-1' />
                <div className='d-flex align-items-center justify-content-between'> 
                    <h6 className='my-1 '>Total Shipping Charge: </h6>
                    <span>${shippingCharge}</span>
                </div>
                <hr className='my-1' />
                <div className='d-flex align-items-center justify-content-between'> 
                    <h6 className='my-1 '>Tax:  </h6>
                    <span>${tax}</span>
                </div>
                <hr className='my-1' />
                <hr className='my-1' />
                <div className='d-flex align-items-center justify-content-between'> 
                    <h4 className='my-1 '>Grand Total:   </h4>
                    <h6 className='my-1 '>${totalPrice+shippingCharge+tax}</h6>
                </div>
                

            </div>
            
        </div>
    );
};

export default CartSummery;