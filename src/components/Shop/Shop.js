import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDataBase, addToLocalStorage, getDataFromLocalStorage, makeEmpty } from '../../utilities/ManageDB';
import CartSummery from '../CartSummery/CartSummery';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cartProduct, setCartProduct] = useCart(products);

    const addToCartHandler = (product) => {
        const ifExist = cartProduct.find(eachProduct => eachProduct.id === product.id);
        let newCartArray = [];
        if (ifExist) {
            let restCartProductsCart = cartProduct.filter(eachProduct => eachProduct.id !== product.id);
            ifExist.quantity = ifExist.quantity + 1;
            newCartArray = [...restCartProductsCart, ifExist];

        }
        else {
            product.quantity = 1;
            newCartArray = [...cartProduct, product];

        }
        setCartProduct(newCartArray)


        addToDataBase(product)
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
                        <CartSummery cartProduct={cartProduct}>
                            <Link to={'/orders'}>
                                <button  className='btn btn-info form-control text-light'>Order Review</button>
                            </Link>
                        </CartSummery>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Shop;