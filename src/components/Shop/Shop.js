import React, { useEffect, useState } from 'react';
import CartSummery from '../CartSummery/CartSummery';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartProduct,setCartProduct] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(products => setProducts(products))
    },[])

    const addToCartHandler = (product)=>{
        const totalCartState = [...cartProduct,product];
        setCartProduct(totalCartState)
    }
    const makeEmptyList = () =>{
        setCartProduct([])
        

    }

    return (
        <div>
            <div className="row  m-0">
                
                <div className="col-9">
                    <h2 className='my-3'>All Products</h2>
                    <div className="row g-4">
                        {
                            products.map(product => <Product key={product.id} addToCartHandler={addToCartHandler} product={product}></Product>)
                        }
                    </div>

                </div>
                <div className="col-3">
                    <div className='cart-summary-section'>
                        <CartSummery makeEmptyList={makeEmptyList} cartProduct={cartProduct}></CartSummery>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;