import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';
import CustomButtonComp from '../custom--button/custom-button.component';


import './cart-dropdown.styles.scss';


//we are not using Link to redirect, but withROuter
const CartDropdownComp = ({cartItems, itemCount, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                itemCount?
                    cartItems.map(cartItem => (<CartItem key = {cartItem.id} item={cartItem}/>))
                :   <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButtonComp onClick = {()=> {
            history.push('/checkout') 
            dispatch(toggleCartHidden());
            }} >
            GO TO CHECKOUT
        </CustomButtonComp>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    itemCount: selectCartItemsCount,
})


export default withRouter(connect(mapStateToProps)(CartDropdownComp));