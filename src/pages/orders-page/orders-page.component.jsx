import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ordersService } from '../../services/orders/orders.service';

import { trackPromise, usePromiseTracker } from 'react-promise-tracker';

import './orders.page.styles.scss';

import OrdersPreviewComp from '../../components/orders-preview/orders-preview.component';


export const LoadingSpinerComponent =  ({itemOrders}) => {
     const { promiseInProgress } = usePromiseTracker();
    
      return (
        <div className='order-page'>
        {
           (promiseInProgress) ?
            (<div className='spinner'></div>)
            :
            (<OrdersPreviewComp itemOrders = {itemOrders}> </OrdersPreviewComp>)
        }
        </div>
      )
};


class OrdersPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: null,
        }
    }

    componentDidMount() {
        trackPromise(ordersService.getBuys(this.props.currentUser).then( orders => this.setState({orders})));
    }

    render() {
        const response = this.state.orders;
        const itemOrders = response? response.data.response: [];
        return(
            <LoadingSpinerComponent  itemOrders = {itemOrders}/>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(OrdersPage);