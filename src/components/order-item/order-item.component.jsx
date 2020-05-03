import React from 'react';

import './order-item.styles.scss';

const OrderItemComp = ({item}) => {
    const {address_line1, last4, total, name, created_at} = item;

    const transformName = (name) => {
        return name.split(" ")[0];
    }
    return(
    <div className='order-item'>
        <span className='date'>{created_at.substring(0,10)}</span>
        <span className='name'>{transformName(name)}</span>
        <span className='last4'>{last4}</span>
        <span className='address'>{address_line1}</span>
        <span className='price'>$ {total}</span>
    </div>
    )
};

export default OrderItemComp;