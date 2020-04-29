import PRODUCTS_DATA from './products.data';

const INITIAL_STATE = {
    products: PRODUCTS_DATA
};

const productsReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return prevState;
    }
}

export default productsReducer;