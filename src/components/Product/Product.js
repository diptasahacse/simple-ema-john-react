import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = ({product,addToCartHandler}) => {
    const {img,name,price,seller,ratings} = product;
    return (
        <div className='col-4'>
            <div className="card p-2 h-100">
                <img className='rounded' src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">
                        {name}
                    </h5>
                    <p>Price: ${price}</p>
                    <div className='mt-4'>
                        <p className='m-0'>Manufacturer : {seller}</p>
                        <p className='m-0'>Rating : {ratings}</p>
                    </div>
                </div>
                <div className="card-footer bg-white border-0">
                    <button onClick={()=>addToCartHandler(product)} className="btn btn-primary form-control">
                        
                        <span className='me-1'>Add to cart</span>
                        <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default Product;