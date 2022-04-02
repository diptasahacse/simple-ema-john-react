import React, { useEffect, useState } from 'react';
import { addToDataBase, addToLocalStorage, getDataFromLocalStorage, makeEmpty } from '../../utilities/ManageDB';
import CartSummery from '../CartSummery/CartSummery';
import Product from '../Product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cartProduct, setCartProduct] = useState([])


    useEffect(() => {

        fetch('products.json')
            .then(res => res.json())
            .then(products => {
                setProducts(products)


            })
    }, [])
    useEffect(() => {
        let localStoredCart = getDataFromLocalStorage();
        let newArr = [];
        for (const id in localStoredCart) {
            let product = products.find(pro => pro.id === id);
            if(product){
                product.quantity = localStoredCart[id];
                newArr.push(product);
                
            }
            
        }
        setCartProduct(newArr);
        
    }, [products]);


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
    const makeEmptyList = () => {
        setCartProduct([])
        makeEmpty()


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