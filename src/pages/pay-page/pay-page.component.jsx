import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';


import PayItemComp from '../../components/pay-item/pay-item.component';
import StripeCheckoutButtonComp from '../../components/stripe-button/stripe-button.component';

import './pay-page.styles.scss';


const PayPage = ({cartItems, total}) => (
    <div className='pay-page'>
        <div className='pay-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Unit Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem) => (
                <PayItemComp  key = {cartItem.id} cartItem = {cartItem}></PayItemComp>
            ))
        }
        <div className='total'> <span>TOTAL: ${total}</span></div>
        {
            total === 0?
            (<div className='nothing'> <span>Nothing to buy yet, go back to Products</span></div>)
            :
            <div className='buy-items'>
                <div className='test-warning'>
                    *please use for testing
                <br/>
                    4242 4242 4242 4242 - Exp: 01/29 - CVV:123
                </div>
                <StripeCheckoutButtonComp  price = {total}/>
            </div>
        }


        
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(PayPage); 