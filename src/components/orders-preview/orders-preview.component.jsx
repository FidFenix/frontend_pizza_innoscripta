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
                <span>Name</span>
            </div>
            <div className='header-order-block'>
                <span>Visa End</span>
            </div>
            <div className='header-order-block'>
                <span>Address</span>
            </div>
            <div className='header-order-block'>
                <span>Total</span>
            </div>
        </div>
        {
                itemOrders.map((itemOrders) => (
                        <OrderItemComp  key = {itemOrders.invoice_id} item={itemOrders}></OrderItemComp>
                ))

        }
       
    </div>
    )
}

export default OrdersPreviewComp;