import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { buyService } from '../../services/buy/buy.service';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const StripeCheckoutButtonComp = ({price, currentUser}) => {
    const publishableKey = 'pk_test_bxSZOxvWlgu4GEgefIAHRGlZ00Q7vxRUYb';

    const onToken = ( currentUser, token ) => {
        buyService.buyPizzas(currentUser, token);
    }
    return (
        <StripeCheckout
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
});

export default connect(mapStateToProps)(StripeCheckoutButtonComp);
