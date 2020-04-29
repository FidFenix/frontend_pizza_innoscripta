import React from 'react';
import './header.styles.scss';
const HeaderComp = () => (
    <div className='header'>
        <div className='logo-container'>
            <div className='logo'>LOGO
            </div>
        </div>
        <div className='options'>
            <div className='option'>
                <span>PIZZAS</span>
            </div>
            <div className='option'>
                <span>DELIVERY</span>
            </div>
            <div className='option'>
                <span>SIGN IN</span>
            </div>
        </div>
    </div>
)
export default HeaderComp;