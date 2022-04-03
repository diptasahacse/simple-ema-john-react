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
    let localStorageObj = JSON.parse(localStorage.getItem('shopping-cart'));
    if(localStorageObj){
        if(localStorageObj[id]){
            delete localStorageObj[id];
            localStorage.setItem('shopping-cart',JSON.stringify(localStorageObj))
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
const addToDataBase = product =>{
    const {id} = product;
    let db = {};
    const storedTracker = localStorage.getItem('shopping-cart');
    if(storedTracker){
        db = JSON.parse(storedTracker);
    }
    if (id in db){
        db[id] = db[id] + 1;

    }
    else{
        db[id] = 1;

    }
    localStorage.setItem('shopping-cart',JSON.stringify(db))
    
}
const makeEmpty = ()=>{
    localStorage.removeItem('shopping-cart');

}
export {add as addToLocalStorage, remove as removeFromLocalStorage,getDataFromLocalStorage, addToDataBase,makeEmpty}