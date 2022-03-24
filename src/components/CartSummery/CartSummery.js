import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartSummery.css'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const CartSummery = ({cartProduct,makeEmptyList}) => {
    // if(cartProduct.length > 0){
    //     const newArr = [...cartProduct]
    //     console.log(newArr)
    // }

    console.log(cartProduct)

    let totalPrice = cartProduct.reduce((pre,cur)=>pre+cur.price,0);
    let tax = Number((totalPrice*10/100).toFixed(2));
    let shippingPrice = cartProduct.reduce((pre,cur)=>pre+cur.shipping,0);
    let grandTotal = totalPrice + tax + shippingPrice;

    return (
        
        <div>
            <h3 className='text-center my-3'>Cart Summery</h3>
        
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
                    <span>${shippingPrice}</span>
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
                    <h6 className='my-1 '>${grandTotal}</h6>
                </div>

                <div className='manage-info mt-4'>
                    <button onClick={makeEmptyList} className='btn btn-danger form-control mb-3'>
                        <span className='me-1'>Clear List</span>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                    </button>
                    <button className='btn btn-info form-control text-light'>Review Order</button>

                </div>
                

            </div>

            
        </div>
    );
};


export default CartSummery;