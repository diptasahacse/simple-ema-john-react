import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({ cart }) => {
    console.log(cart)

    return (
        <div>
            {
                cart.map(product => <MakeItem key={product.id} product={product}></MakeItem>)
            }

        </div>
    );
};
const MakeItem = ({ product }) => {
    const { img, name, price, shipping, quantity } = product;
    return (
        <div className='border m-3 p-2 rounded d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <div>
                    <img className='review-product-image' src={img} alt="" />
                </div>
                <div>
                    <h5>{name}</h5>
                    <p className='m-0'>Price: <span className='text-warning'>${price}</span></p>
                    <p className='m-0'>Shipping: <span className='text-warning'>${shipping}</span></p>

                </div>
            </div>

            <div className='d-flex align-items-center'>
                <div className='me-3'>
                    <p>Quantity: {quantity}</p>
                </div>
                <div>
                    <FontAwesomeIcon className='review-item-remove-icon border border-2 border-danger p-2 rounded-circle' icon={faTrash}></FontAwesomeIcon>
                </div>
            </div>

        </div>
    );

}

export default ReviewItem;