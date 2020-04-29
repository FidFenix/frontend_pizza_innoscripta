import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {createStructuredSelector} from 'reselect';

import Logo from '../../assets/yummipizza.png';
import './header.styles.scss';
import { selectCurrentUser } from '../../redux/user/user.selector';

const HeaderComp = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container'>
            <div className='logo' 
                 style={{
                     background: `url(${Logo})`
                 }}
            >
            </div>
        </Link>
        <div className='options'>
            <Link className='option' to='/products'>
                <span>PRODUCTS</span>
            </Link>
            <Link className='option' to='/products'>
                <span>DELIVERY</span>
            </Link>
            {
                currentUser?
                <div className='option' onClick={()=> console.log("sign out")}> SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(HeaderComp);