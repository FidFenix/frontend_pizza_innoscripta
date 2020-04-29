import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

//import CartIcon from '../cart-icon/cart-icon.component';

import { ReactComponent as Logo } from '../../assets/yummipizza.svg';
import './header.styles.scss';
import CartDropdownComp from '../cart-dropdown/cart-dropdown.component';
import CartIconComp from '../cart-icon/cart-icon.component';

const HeaderComp = ({currentUser, isCartHidden}) => (
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
                <div className='option' onClick={()=> console.log("sign out")}> SIGN OUT</div>
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isCartHidden: selectCartHidden
})

export default connect(mapStateToProps)(HeaderComp);