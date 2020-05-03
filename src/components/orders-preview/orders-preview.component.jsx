import React from 'react';
import './orders-preview.styles.scss';
import OrderItemComp from '../order-item/order-item.component';

const OrdersPreviewComp = ({itemOrders}) => {
    return(
    <div className='order-preview-page'>
        <div className='order-header'>
            <div className='header-order-block'>
                <span>Date</span>
            </div>
            <div className='header-order-block'>
                <span>Hour</span>
            </div>
            <div className='header-order-block'>
                <span>Name</span>
            </div>
            <div className='header-order-block'>
                <span>Card End</span>
            </div>
            <div className='header-order-block'>
                <span>Address</span>
            </div>
            <div className='header-order-block'>
                <span>Payment</span>
            </div>
        </div>
        {
            (0 < itemOrders.length)?
                itemOrders.map((itemOrders) => (
                        <OrderItemComp  key = {itemOrders.invoice_id} item={itemOrders}></OrderItemComp>
                ))
                :(<h2>You have not made orders</h2>)

        }
       
    </div>
    )
}

export default OrdersPreviewComp;