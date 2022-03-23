import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(products => setProducts(products))
    },[])

    return (
        <div>
            <div className="row  m-0">
                
                <div className="col-9">
                    <h2 className='my-3'>All Products</h2>
                    <div className="row g-4">
                        {
                            products.map(product => <Product key={product.id} product={product}></Product>)
                        }
                    </div>

                </div>
                <div className="col-3">
                    <h4 className='text-center'>Order Summary</h4>
                </div>
            </div>
        </div>
    );
};

export default Shop;