import { CartActionTypes } from '../redux/cart/cart.types';
import cartReducer from '../redux/cart/cart.reducer';

describe('Adding zero items to cart, it should return the prev state of cart', ()=> {
    it('should return the initial state', () => {
        expect(cartReducer( { hidden: true, cartItems: [] }, 
                            {action: { 'type': CartActionTypes.ADD_ITEM,
                                       'payload': {}
                                     }
                            } 
                          )).toEqual({ hidden: true, cartItems: [] });
    })
})
