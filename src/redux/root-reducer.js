//Global reducer
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //lo perssist data in the local storage
import productsReducer from './products/products.reducer';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';


import directoryReducer from './directory/directory.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] //contains any reducer passed
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    productsStore: productsReducer,
})

export default persistReducer(persistConfig, rootReducer);