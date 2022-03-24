const add = (element)=>{
    const {id} = element;
    let pId = id;

    // store data from local storage
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'))
    //if shopping cart does not exist then make an empty obj
    if(!shoppingCart){
        shoppingCart = {};

    }
    // get value for specific id
    const quantity = shoppingCart[pId];

    if(quantity){
        shoppingCart[pId] = quantity+1;

    }
    else{
        shoppingCart[pId] = 1;

    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));

}
// remove
const remove = (id) =>{
    let pId = id;
    let localStorageObj = JSON.parse(localStorage.getItem('shopping-cart'));
    if(localStorageObj){
        if(localStorageObj[pId]){
            delete localStorageObj[pId];
            localStorage.setItem('shopping-cart',JSON.stringify(localStorageObj))
            

        }
        else{
            alert("This item is not present in your cart")
        }
        
    }
    

}

const getDataFromLocalStorage = () =>{
    // store data from local storage
    let shoppingCart = JSON.parse(localStorage.getItem('shopping-cart'))
    //if shopping cart does not exist then make an empty obj
    if(!shoppingCart){
        shoppingCart = {};

    }
    return shoppingCart;
}
export {add as addToLocalStorage,remove as removeFromLocalStorage,getDataFromLocalStorage}