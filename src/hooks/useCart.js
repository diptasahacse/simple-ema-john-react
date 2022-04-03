import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../utilities/ManageDB";

const useCart = (products) => {
    const [cartProduct, setCartProduct] = useState([]);

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

    return [cartProduct, setCartProduct];
}
export default useCart;