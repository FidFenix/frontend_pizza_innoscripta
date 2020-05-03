import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ordersService } from '../../services/orders/orders.service';

import OrderItemComp from '../../components/order-item/order-item.component';

import './orders.page.styles.scss';

class OrdersPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: null
        }
    }

    componentDidMount() {
        ordersService.getBuys(this.props.currentUser).then( orders => this.setState({orders}));
    }

    render() {
        const response = this.state.orders;
        const itemOrders = response? response.data.response: [];
        console.log(itemOrders);
    return(
    <div className='order-page'>
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
            (0 < itemOrders.lenght)?
            (
                itemOrders.map((itemOrders) => (
                        <OrderItemComp  key = {itemOrders.invoice_id} item={itemOrders}></OrderItemComp>
                ))
            ):
            (
                <h2>You have no orders yet</h2>
            )
        }
       
    </div>
    )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(OrdersPage);