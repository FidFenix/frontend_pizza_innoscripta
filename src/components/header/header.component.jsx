import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { removeAllItemsFromCart } from '../../redux/cart/cart.actions';

import { ReactComponent as Logo } from '../../assets/yummipizza.svg';

import { authenticationService } from '../../services/user/authentication.service';
import './header.styles.scss';
import CartDropdownComp from '../cart-dropdown/cart-dropdown.component';
import CartIconComp from '../cart-icon/cart-icon.component';

class HeaderComp extends Component {

    logout = () => {
        authenticationService.logout();
        this.props.removeAllItems();
    }

    render() {
        const { currentUser, isCartHidden } = this.props;
        return(
            <div className='header'>
               <Link className = 'logo-container' to = '/'>
                   <Logo className = 'logo'></Logo>
               </Link>
               <div className = 'options'>
                   <Link className = 'option' to='/products'>
                       <span>PRODUCTS</span>
                   </Link>
                   <Link className = 'option' to='/products'>
                       <span>DELIVERY</span>
                   </Link>
                   {
                       currentUser?
                       <div className='option' onClick={this.logout}> SIGN OUT</div>
                       :
                       <Link className='option' to='/signin'>SIGN IN</Link>
                   }
                   <CartIconComp/>
               </div>
               {
                   isCartHidden?
                   (null):
                   (<CartDropdownComp/>)
               }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isCartHidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
    removeAllItems: () => dispatch(removeAllItemsFromCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp);