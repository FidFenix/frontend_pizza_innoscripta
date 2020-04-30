import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButtonComp = ({price}) => {
    const publishableKey = 'pk_test_bxSZOxvWlgu4GEgefIAHRGlZ00Q7vxRUYb';

    const onToken = token => {
        console.log(token)
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

export default StripeCheckoutButtonComp;