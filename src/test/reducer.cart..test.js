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

describe('Removing items from cart', ()=> {
  it('should return the initial state', () => {
      expect(cartReducer( { hidden: true, cartItems: [{'id': 3,
        'imageUrl': "https://cdn.pixabay.com/photo/2019/08/23/13/05/pizza-4425691_960_720.jpg",
        'name': "Big Pizza Dough Cheese",
        'price': 35,
        'quantity': 2}] }, 
                          {action: { 'type': CartActionTypes.REMOVE_ITEM,
                                     'payload': {
                                      id: 3,
                                      imageUrl: "https://cdn.pixabay.com/photo/2019/08/23/13/05/pizza-4425691_960_720.jpg",
                                      name: "Big Pizza Dough Cheese",
                                      price: 35,
                                      quantity: 1
                                     }
                                   }
                          } 
                        )).toEqual({ hidden: true, cartItems: [{'id': 3,
                        'imageUrl': "https://cdn.pixabay.com/photo/2019/08/23/13/05/pizza-4425691_960_720.jpg",
                        'name': "Big Pizza Dough Cheese",
                        'price': 35,
                        'quantity': 2}] });
  })
})

