import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);
    let quantity = 0;
    for (const product of cart) {
        quantity+= product.quantity;
        
    }
    return (
        <div>
            <h3>Orders : {quantity}</h3>
        </div>
    );
};

export default Orders;