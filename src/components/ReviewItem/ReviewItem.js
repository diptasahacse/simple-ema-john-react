import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({ cart,removeItemHandler }) => {

    return (
        <div>
            {
                cart.map(product => <MakeItem key={product.id} removeItemHandler={removeItemHandler} product={product}></MakeItem>)
            }

        </div>
    );
};
const MakeItem = ({ product,removeItemHandler }) => {
    const { img, id, name, price, shipping, quantity } = product;
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
                    <button onClick={()=>{removeItemHandler(product)}} className='border-0 bg-transparent'>
                        <FontAwesomeIcon className='review-item-remove-icon p-2 rounded-circle' icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

        </div>
    );

}

export default ReviewItem;