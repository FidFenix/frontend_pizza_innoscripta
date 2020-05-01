import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { buyService } from '../../services/buy/buy.service';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { removeAllItemsFromCart } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';

import './stripe-button.styles.scss';
const StripeCheckoutButtonComp = ({price, currentUser, items, removeAllItems}) => {
    const publishableKey = 'pk_test_bxSZOxvWlgu4GEgefIAHRGlZ00Q7vxRUYb';

    const onToken = ( token ) => {
        buyService.buyPizzas(currentUser, token, items, price );
        removeAllItems();
    }
    return (
        <StripeCheckout clasName = 'stripe-button'
            label='Pay Now'
            name = 'The Yummi Pizza'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            token = {onToken}
            stripeKey = {publishableKey}
        ></StripeCheckout>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    items: selectCartItems
});

const mapDispatchToProps = (dispatch) => ({
    removeAllItems: ()=> dispatch(removeAllItemsFromCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(StripeCheckoutButtonComp);
